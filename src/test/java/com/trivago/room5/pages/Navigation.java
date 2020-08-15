package com.trivago.room5.pages;

import com.trivago.room5.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;


public class Navigation extends BasePage {

    public WebElement destinationMenu(String destination){
        return Driver.get().findElement(By.xpath("//div[text()='"+destination+"']"));
    }


    @FindBy(className = "destination-menu")
    public List<WebElement> destinationsMenu;

    @FindBy(className = "destination-name")
    public List<WebElement> destinationsNames;

    @FindBy(xpath = "//span[@class='destination article-card post-bottom-related-articles']")
    public List<WebElement> resultSet;

}
