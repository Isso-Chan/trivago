package com.trivago.room5.pages;

import com.trivago.room5.utilities.Driver;
import org.openqa.selenium.support.PageFactory;

public abstract class BasePage {

    public BasePage() {
        PageFactory.initElements(Driver.get(), this);
    }




}
