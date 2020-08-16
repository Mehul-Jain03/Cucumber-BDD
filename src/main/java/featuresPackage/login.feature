Feature: Yahoo Login Page

#Scenario: Yahoo Login Test Scenario

#Without Examples keyword
#Given user on login page
#Then user enter "mehuljbhamawat" id
#Then user clicks on next button
#Then user quit the browser


Scenario Outline: Yahoo Login Test Scenario

#With Examples keyword
Given user on login page
Then user enter "<emailId>" id
Then user clicks on next button
Then user quit the browser

Examples:
 | emailId |
 | mehuljbhamawat  |
 | shreyas@tom.com |