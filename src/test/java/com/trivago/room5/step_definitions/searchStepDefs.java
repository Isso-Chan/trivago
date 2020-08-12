package com.trivago.room5.step_definitions;

import com.trivago.room5.pages.BasePage;
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

public class searchStepDefs {

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

    @And("the user click Ok button for cokies")
    public void theUserClickOkButtonForCokies() {
        Search s=new Search();
        try{
            Browserutilities.waitForClickablility(s.cokiesOk,20);
            s.cokiesOk.click();
        }catch (Exception e){}

    }

    @When("the user selects {string} and {string}")
    public void the_user_selects_and(String dest, String rec) {
        Search s=new Search();
        Browserutilities.waitForClickablility(s.searchInput,20);
        s.searchIcon.click();
        s.searchIconOpen.click();
        s.searchIcon.click();
        s.destination(dest).click();
        s.recommendedTag(rec).click();
        destination=dest;
        recommended=rec;
    }

    @Then("the user gets related results")
    public void the_user_gets_related_results() {
        Search s=new Search();
        List<String> resultsText = Browserutilities.getElementsText(s.selectionsSearchResults);

    }
}
