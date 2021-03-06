package com.trivago.room5.pages;

import com.trivago.room5.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class Search extends BasePage {


    @FindBy(xpath = "//input[@class='input search-input']")
    public WebElement searchInput;

    @FindBy(xpath = "//div[@class='search-results']/h3")
    public WebElement totalResults;

    @FindBy(xpath = "//div[@class='v-bounce v-bounce1']")
    public WebElement bounceVbounce;

    @FindBy(xpath = "//section[@class='posts-section']//span[@class='details']")
    public List<WebElement> selectionsSearchResults;

    public WebElement destination(String place){
        return Driver.get().findElement(By.xpath("//div[@class='search-destination-tags search-tags']//div[text()='"+place+"']"));
    }

    public WebElement recommendedTag(String tag){
        return Driver.get().findElement(By.xpath("//div[@class='search-recommended-tags search-tags']//div[text()='"+tag+"']"));
    }



}
