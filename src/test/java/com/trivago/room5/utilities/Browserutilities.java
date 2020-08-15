package com.trivago.room5.utilities;

import com.mifmif.common.regex.Generex;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.ArrayList;
import java.util.List;

public class Browserutilities {

    /**
     * Waits for provided element to be clickable
     *
     * @param element
     * @param timeout
     * @return
     */
    public static WebElement waitForClickablility(WebElement element, int timeout) {
        WebDriverWait wait = new WebDriverWait(Driver.get(), timeout);
        return wait.until(ExpectedConditions.elementToBeClickable(element));
    }

    /**
     * Waits for element matching the locator to be clickable
     *
     * @param locator
     * @param timeout
     * @return
     */
    public static WebElement waitForClickablility(By locator, int timeout) {
        WebDriverWait wait = new WebDriverWait(Driver.get(), timeout);
        return wait.until(ExpectedConditions.elementToBeClickable(locator));
    }
    /**
     * return a list of string from a list of elements
     *
     * @param list of webelements
     * @return list of string
     */
    public static List<String> getElementsText(List<WebElement> list) {
        List<String> elemTexts = new ArrayList<>();
        for (WebElement el : list) {
            elemTexts.add(el.getText());
        }
        return elemTexts;
    }

    /**
     * Switches to new window
     */
    public static void switchToWindow() {
        String origin = Driver.get().getWindowHandle();
        for (String handle : Driver.get().getWindowHandles()) {
            if (!handle.equals(origin)){
                Driver.get().switchTo().window(handle);
            }
        }
    }

    /**
     * Moves the mouse to given element
     *
     * @param element on which to hover
     */
    public static void hover(WebElement element) {
        Actions actions = new Actions(Driver.get());
        actions.moveToElement(element).perform();
    }

    /**
     * Scrolls down to an element using JavaScript
     *
     * @param element
     */
    public static void scrollToElement(WebElement element) {
        ((JavascriptExecutor) Driver.get()).executeScript("arguments[0].scrollIntoView(true);", element);
    }

    /**
     *  checks that an element is present on the DOM of a page. This does not
     *    * necessarily mean that the element is visible.
     * @param element
     * @param time
     */
    public static void waitForPresenceOfElement(WebElement element, long time) {
        new WebDriverWait(Driver.get(), time).until(ExpectedConditions.elementToBeClickable(element));
    }

    /*
    This method returns a generated email
    * @return Email with 10 chars in name
     */
    public static String generateEmail(){
        String regex = "\\w{10}\\@gmail\\.com";
       return new Generex(regex).random();
    }

    public static String CamelCase(String str){
        String[] words = str.toLowerCase().split(" ");
        String sentence="";
        for (String word : words) {
            sentence +=" "+word.substring(0, 1).toUpperCase() + word.substring(1);
        }
        return sentence.trim();
    }

    public static void waitUntilLoaderScreenDisappear(WebElement element) {
        try {
            WebDriverWait wait = new WebDriverWait(Driver.get(), 10);
            wait.until(ExpectedConditions.invisibilityOf(element));
        } catch (Exception e) {
            e.printStackTrace();
        }

    }

}
