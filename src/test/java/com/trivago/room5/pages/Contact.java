package com.trivago.room5.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class Contact extends BasePage {

    @FindBy(xpath = "//textarea[@class='contact-msg']")
        public WebElement messageBox;

    @FindBy(xpath = "(//input[@class='contact-input'])[1]")
        public WebElement fullNameBox;

    @FindBy(xpath = "(//input[@class='contact-input'])[2]")
    public WebElement emailBox;

    @FindBy(id = "confirm")
    public WebElement checkBox;

    @FindBy(xpath = "(//div[@class='alert-error'])[1]")
    public WebElement checkBoxErrorAlert;

    @FindBy(xpath = "(//div[@class='alert-error'])[2]")
    public WebElement mailAdresErrorAlert;

    @FindBy(xpath = "//div[@class='alert-warning']")
    public WebElement allFieldsAlertWarning;

    @FindBy(className = "contact-submit")
    public WebElement submitButton;


}
