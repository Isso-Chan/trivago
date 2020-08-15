package com.trivago.room5.step_definitions;

import com.trivago.room5.pages.Navigation;
import com.trivago.room5.utilities.Browserutilities;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;

import java.util.List;

public class NavigationStepDefs {

    String selectedPlace;

    @When("the user clicks nav-icon and {string} button on the top left")
    public void the_user_clicks_nav_icon_and_button_on_the_top_left(String navigation) throws InterruptedException {
        Navigation n=new Navigation();
        Browserutilities.scrollToElement(n.navIcon);
        n.navIcon.click();
        navigation=Browserutilities.CamelCase(navigation);
        Browserutilities.waitForClickablility(n.navigationMenu(navigation),10000);
        n.navigationMenu(navigation).click();
    }

    @When("selects {string} as a destinations")
    public void selects_as_a_destinations(String destination) {
        destination=Browserutilities.CamelCase(destination);
        new Navigation().destinationMenu(destination).click();
    }

    @When("the user selects {string} as a place")
    public void the_user_selects_as_a_place(String place) {
        place=Browserutilities.CamelCase(place);
        Navigation n=new Navigation();
        Browserutilities.scrollToElement(n.destinationMenu(place));
        new Navigation().destinationMenu(place).click();
        selectedPlace=place;
    }

    @When("the user filters the selection with {string}")
    public void the_user_filters_the_selection_with(String filter) {
        filter=Browserutilities.CamelCase(filter);
        Navigation n=new Navigation();
        Browserutilities.scrollToElement(n.destinationMenu(filter));
        n.destinationMenu(filter).click();
        boolean isActive = n.destinationMenu(filter).getAttribute("class").contains("active");
        Assert.assertTrue("Verification of filter:"+filter, isActive);
    }

    @Then("the user gets the results")
    public void the_user_gets_the_results() {
        Navigation n=new Navigation();
        Boolean research=false;
        List<String> elementsText = Browserutilities.getElementsText(n.resultSet);
        Assert.assertTrue("Verification of place:"+selectedPlace, elementsText.contains(selectedPlace.toString().toUpperCase()));

    }







}
