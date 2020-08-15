package com.trivago.room5.step_definitions;

import com.trivago.room5.pages.Search;
import com.trivago.room5.utilities.Browserutilities;
import com.trivago.room5.utilities.ConfigurationReader;
import com.trivago.room5.utilities.Driver;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.Keys;

import java.util.List;

public class SearchStepDefs {

    public String recommended;
    public String destination;

    @Given("the user is on the homepage")
    public void the_user_is_on_the_homepage() {
        String url = ConfigurationReader.get("url");
        Driver.get().get(url);
    }

    @When("the user enters {string} in search bar and clicks")
    public void the_user_enters_in_search_bar_and_clicks(String word) {
        Search s=new Search();
        s.searchIcon.click();
        Browserutilities.waitForClickablility(s.searchInput,20);
        s.searchInput.sendKeys(word, Keys.ENTER);

    }

    @Then("the user should see related results with {string}")
    public void the_user_should_see_related_results_with(String word) {
        Search s=new Search();
        String result = s.resultTitle.getText();
            if(!result.equals("No results")){
                List<String> searchResults = Browserutilities.getElementsText(s.searchResults);
                searchResults.forEach(a-> Assert.assertTrue("Verification of searched item:"+word, a.toLowerCase().contains(word.toLowerCase())));
            }


    }
/*
    @Then("the page title is {string}")
    public void the_page_title_is(String string) {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }*/

    @And("the user click Ok button for cookies")
    public void theUserClickOkButtonForCookies() {
        Search s=new Search();
        try{
            //Thread.sleep(2000);
            Browserutilities.waitForPresenceOfElement(s.cookiesOk,10);
            s.cookiesOk.click();
        }catch (Exception e){
            System.out.println("No cookies found!!!!");
        }

    }

    @When("the user selects {string} and {string}")
    public void the_user_selects_and(String dest, String rec) throws InterruptedException {
        Search s=new Search();
        s.searchIcon.click();
        Browserutilities.scrollToElement(s.destination(dest));
       /* while (!s.destinations.toString().toLowerCase().contains(dest.toLowerCase())){
            System.out.println("Destinations = " + Browserutilities.getElementsText(s.destinations).toString());
            s.nextFilterButtonOfDestinations.click();
        }*/
        Browserutilities.waitForPresenceOfElement(s.destination(dest),10);
        s.destination(dest).click();
        Browserutilities.waitForPresenceOfElement(s.recommendedTag(rec),10);
        s.recommendedTag(rec).click();
        destination=dest;
        recommended=rec;
    }

    @Then("the user gets related results")
    public void the_user_gets_related_results() {
        Search s=new Search();
        Browserutilities.waitUntilLoaderScreenDisappear(s.bounceVbounce);
        String total = s.totalResults.getText().split(" ")[0];
        Assert.assertTrue("Search result verification", Integer.parseInt(total)>0);

        List<String> resultsText = Browserutilities.getElementsText(s.selectionsSearchResults);
        Assert.assertTrue("Destination verification", resultsText.toString().toLowerCase().contains(destination.toLowerCase()));

    }
}
