Feature: Free CRM Test

Scenario: Deals Creation

Given user should be on free crm website
Then user enters mailid and password
| email | password |
| mehuljbhamawat@gmail.com | Test@123 |
Then user is on home page and click on deals
Then enter the values
|Title|probability|amount|commission|
|Mehul|12|15|10|
|Akshay|13|16|70|
|Hites|14|18|20|
|Manish|15|555|10|

Then user clicks on save
Then close the browser

