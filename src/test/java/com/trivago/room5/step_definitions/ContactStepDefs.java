package com.trivago.room5.step_definitions;

import com.trivago.room5.pages.Contact;
import com.trivago.room5.utilities.Browserutilities;
import com.trivago.room5.utilities.Driver;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class ContactStepDefs {


    @When("the user clicks {string} tag under the page")
    public void the_user_clicks_tag_under_the_page(String tag) {
        Contact c=new Contact();
        Browserutilities.hover(c.footerLink(tag));
        c.footerLink(tag).click();

    }

    @Then("a new tab opens")
    public void a_new_tab_opens() {
        Contact c=new Contact();
        String defaultHandle = Driver.get().getWindowHandle();
        Browserutilities.switchToWindow();
        Assert.assertFalse("WindowHandle verification ", defaultHandle.equals(Driver.get().getWindowHandle()));



    }

    @When("the user sends {string} as message")
    public void the_user_sends_as_message(String message) {
        Contact c=new Contact();
        Browserutilities.waitForClickablility(c.messageBox,15);
        c.messageBox.sendKeys(message);

        Assert.assertEquals(message,c.messageBox.getText(), "Message verification");
    }

    @When("the user sends {string} as Full Name")
    public void the_user_sends_as_Full_Name(String name) throws InterruptedException {
        Contact c=new Contact();
        c.fullNameBox.sendKeys(name);
        Thread.sleep(1000);
        Assert.assertTrue("Name verification", name.equals(c.fullNameBox.getText()));
    }

    @When("the user enters {string} in Your Email box")
    public void the_user_enters_in_Your_Email_box(String email) {
        Contact c=new Contact();
        c.emailBox.sendKeys(email);
        Assert.assertEquals("Email verification", email.equals(c.emailBox.getText()));

    }

    @When("the user marks the checkbox to give approval about the message")
    public void the_user_marks_the_checkbox_to_give_approval_about_the_message() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }

    @When("the user clicks Submit button to send the contact form")
    public void the_user_clicks_Submit_button_to_send_the_contact_form() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }








}
