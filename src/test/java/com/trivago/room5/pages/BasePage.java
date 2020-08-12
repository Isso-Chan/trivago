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
    public WebElement cokiesOk;

    public WebElement footerLink(String tag){
        return Driver.get().findElement(By.xpath("//div[@class='container-wide']//a[text()='"+tag+"']"));
    }



}
