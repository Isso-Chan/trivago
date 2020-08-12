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

    @FindBy(className = "section-title")
    public WebElement resultTitle;

    @FindBy(xpath = "//div[@class='search-results']//h2/span")
    public List<WebElement> searchResults;

    @FindBy(xpath = "//div[@class='search-destination-tags search-tags']//div[@class='filter-tag']")
    public List<WebElement> destinations;

    @FindBy(xpath = "//div[@class='search-recommended-tags search-tags']//div[@class='filter-tag']")
    public List<WebElement> recommendedTags;

    @FindBy(xpath = "//div[@class='search-results']//div[@class='destination-menu']")
    public List<WebElement> selectionsSearchResults;

    @FindBy(className = "search-icon open")
    public WebElement searchIconOpen;


    public WebElement destination(String place){
        return Driver.get().findElement(By.xpath("//div[@class='search-destination-tags search-tags']//div[text()='"+place+"']"));
    }

    public WebElement recommendedTag(String tag){
        return Driver.get().findElement(By.xpath("//div[@class='search-recommended-tags search-tags']//div[text()='"+tag+"']"));
    }



}
