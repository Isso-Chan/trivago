package com.trivago.room5.step_definitions;

import com.trivago.room5.pages.Contact;
import com.trivago.room5.utilities.Browserutilities;
import com.trivago.room5.utilities.Driver;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

import java.util.Random;

public class Contact_NewsletterStepDefs {


    @When("the user clicks {string} tag under the page")
    public void the_user_clicks_tag_under_the_page(String tag) {
        Contact c=new Contact();
        Browserutilities.scrollToElement(c.footerLink(tag));
        c.cookiesCheck();
        c.footerLink(tag).click();

    }

    @Then("a new tab opens")
    public void a_new_tab_opens() {
        Contact c=new Contact();
        String defaultHandle = Driver.get().getWindowHandle();
        Browserutilities.switchToWindow();
        c.cookiesCheck();
        Assert.assertFalse("WindowHandle verification ", defaultHandle.equals(Driver.get().getWindowHandle()));



    }

    @When("the user sends {string} as message")
    public void the_user_sends_as_message(String message) throws InterruptedException {
        Contact c=new Contact();
        Browserutilities.waitForClickablility(c.messageBox,15);
        c.messageBox.sendKeys(message);
    }

    @When("the user sends {string} as Full Name")
    public void the_user_sends_as_Full_Name(String name) throws InterruptedException {
        Contact c=new Contact();
        c.fullNameBox.sendKeys(name);
    }

    @When("the user enters {string} in Your Email box")
    public void the_user_enters_in_Your_Email_box(String email) {
        Contact c=new Contact();
        if(email.equals("anyEmail@gmail.com")){
            email=Browserutilities.generateEmail();
        }
        c.emailBox.sendKeys(email);
    }

    @When("the user marks the checkbox to give approval about the message")
    public void the_user_marks_the_checkbox_to_give_approval_about_the_message() {
        Contact c=new Contact();
        c.checkBox.click();
        Assert.assertTrue(c.checkBox.isSelected());
    }

    @When("the user clicks Submit button to send the contact form")
    public void the_user_clicks_Submit_button_to_send_the_contact_form() {
        Contact c=new Contact();
        Browserutilities.scrollToElement(c.submitButton);
        c.cookiesCheck();
        c.submitButton.click();
        Browserutilities.waitForClickablility(c.submitMessage,10);

    }

    @When("the user clicks Submit button")
    public void the_user_clicks_Submit_button() {
        Contact c=new Contact();
        c.cookiesCheck();
        c.submitButton.click();
    }

    @Then("the user gets {string} message")
    public void the_user_gets_message(String message) {
        Contact c=new Contact();
        Assert.assertEquals("Verification of form sent", message, c.submitMessage.getText());
    }

    @Then("the user gets warning {string} for missing fields")
    public void the_user_gets_warning_for_missing_fields(String warning) {
        Assert.assertEquals("Field Warning verification", warning, new Contact().allFieldsAlertWarning.getText());
    }

    @Then("the user gets {string} for check box")
    public void the_user_gets_for_check_box(String warning) {
        Assert.assertEquals("Checkbox Warning verification", warning, new Contact().contactFormAlertWarning(warning).getText());
    }

    @When("the user enters {string} in email subscription box")
    public void the_user_enters_in_email_subscription_box(String email) {
        Contact c=new Contact();
        Browserutilities.scrollToElement(c.emailSubscription);
        c.emailSubscription.sendKeys(email);
    }

    @When("the user enters an email into subscription box")
    public void the_user_enters_an_email_into_subscription_box() {
        Contact c=new Contact();
        String email=Browserutilities.generateEmail();
        Browserutilities.scrollToElement(c.emailSubscription);
        c.emailSubscription.sendKeys(email);
    }

    @When("clicks inspire Me button")
    public void clicks_inspire_Me_button() {
        Contact c=new Contact();
        c.cookiesCheck();
        c.inspireMe.click();
    }

    @Then("{string} message is shown")
    public void message_is_shown(String warning) {
       Contact c=new Contact();
       Browserutilities.scrollToElement(c.emailSubmitRegistrationError);
       Assert.assertEquals("Invalid email warning message verification", warning, c.emailSubmitRegistrationError.getText());

    }

    @Then("the user gets verification message as {string}")
    public void the_user_gets_verification_message_as(String newsletterSubmitmessage) {
        Contact c=new Contact();
        Browserutilities.waitForClickablility(c.submittedNewsletterMessage,2000);
        Assert.assertEquals("Newsletter Submission verification", newsletterSubmitmessage, c.submittedNewsletterMessage.getText());
    }










}
