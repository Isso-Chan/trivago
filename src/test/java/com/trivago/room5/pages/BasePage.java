package com.trivago.room5.pages;

import com.trivago.room5.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public abstract class BasePage {

    public BasePage() {
        PageFactory.initElements(Driver.get(), this);
    }

    @FindBy(className = "search-icon")
        public WebElement searchIcon;

    @FindBy(id = "onetrust-accept-btn-handler")
    public WebElement cookiesOk;

    @FindBy(name = "email")
    public WebElement emailSubscription;

    @FindBy(className = "submit")
    public WebElement inspireMe;

    @FindBy(xpath = "//p[@class='submitted h1']")
    public WebElement submittedNewsletterMessage;

    @FindBy(xpath = "//div[@class='alert-error et-email-error']")
    public WebElement emailSubmitRegistrationError;


    /*
    This method returns WebElement of followings accessible through the footer
        About
        Contact
        Jobs
        Press
        trivago
        Mobile apps - searching on the go
        trivago Business Studio
        Legal information
        Privacy notice
     */
    public WebElement footerLink(String tag){
        return Driver.get().findElement(By.xpath("//div[@class='container-wide']//a[text()='"+tag+"']"));
    }

    @FindBy(className = "nav-icon")
    public WebElement navIcon;

    public WebElement navigationMenu(String string){
        String initial=string.substring(0,1).toUpperCase();
        string=initial+string.toLowerCase().substring(1);
        return Driver.get().findElement(By.xpath("//div[text()='"+string+"']"));
    }




}
