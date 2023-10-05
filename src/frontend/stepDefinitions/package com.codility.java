package com.codility.selenium;

 

import org.openqa.selenium.By;

import org.openqa.selenium.Keys;

import org.openqa.selenium.WebElement;

import org.openqa.selenium.interactions.Actions;

 

import org.junit.Test;

import static org.junit.Assert.assertTrue;

import static org.junit.Assert.assertEquals;

 

import java.util.ArrayList;

import java.util.Arrays;

import java.util.List;

 

public class AppTest extends BaseTest {

    @Test

    public void testSomething() {

        webDriver.findElement(By.id("elementId"));

 

        WebElement email = webDriver.findElement(By.id("email-input"));

        WebElement pass = webDriver.findElement(By.id("password-input"));

        WebElement login = webDriver.findElement(By.id("login-button"));

        WebElement actualMessage = webDriver.findElement(By.className("message"));

        String Expmessage = "Welcome to Codility is visible";

        String emailfail = "unknown@codility.com";

        email.sendKeys("login@codility.com");

        pass.sendKeys("password");

        login.click();

        assertEquals(Expmessage,actualMessage);

 

       // assertElementPresent("//input[@id='email-input'");

       if(email==emailfail)
       {
        System.out.println("you shall not pass");
       }
      


 

if(webDriver.findElements(By.id("email-input")).size() != 0){

System.out.println("Element is Present");

}else{

System.out.println("Element is Absent");

}

        

 

 

 

 

    }

}

 