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

       public String destination;

    @Given("the user is on the homepage")
    public void the_user_is_on_the_homepage() {
        String url = ConfigurationReader.get("url");
        Driver.get().get(url);
    }

    @When("the user enters {string} in search bar and clicks")
    public void the_user_enters_in_search_bar_and_clicks(String word) {
        Search s=new Search();
        word=Browserutilities.CamelCase(word);
        Browserutilities.waitForClickablility(s.searchIcon,5);
        s.searchIcon.click();
        Browserutilities.waitForClickablility(s.searchInput,5);
        s.searchInput.sendKeys(word, Keys.ENTER);
        destination=word;

    }


    @And("the user click Ok button for cookies")
    public void theUserClickOkButtonForCookies() {
        Search s=new Search();
        try{
            Thread.sleep(500);
            Browserutilities.waitForPresenceOfElement(s.cookiesOk,5);
            s.cookiesOk.click();
        }catch (Exception e){
            System.out.println("No cookies found!!!!");
        }


    }

    @When("the user selects {string} and {string}")
    public void the_user_selects_and(String dest, String rec) throws InterruptedException {
        Search s=new Search();
        Browserutilities.waitForPresenceOfElement(s.navIcon,5);
        Thread.sleep(3000);
        s.navIcon.click();
        s.searchIcon.click();
        dest=Browserutilities.CamelCase(dest);
        Browserutilities.scrollToElement(s.destination(dest));
        Browserutilities.waitForPresenceOfElement(s.destination(dest),20);
        s.destination(dest).click();

        rec=Browserutilities.CamelCase(rec);
        Browserutilities.scrollToElement(s.recommendedTag(rec));
        Browserutilities.waitForPresenceOfElement(s.recommendedTag(rec),20);
        s.recommendedTag(rec).click();

        destination=dest;
    }

    @Then("the user gets related results")
    public void the_user_gets_related_results() {
        Search s=new Search();
        s.cookiesCheck();
        Browserutilities.waitUntilLoaderScreenDisappear(s.bounceVbounce);
        String total = s.totalResults.getText().split(" ")[0];
        Assert.assertTrue("Search result verification", Integer.parseInt(total)>0);

        List<String> resultsText = Browserutilities.getElementsText(s.selectionsSearchResults);
        System.out.println("resultsText = " + resultsText);
        Assert.assertTrue("Destination verification", resultsText.toString().toLowerCase().contains(destination.toLowerCase()));

    }
}
