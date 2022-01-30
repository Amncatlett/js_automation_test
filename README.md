# js_automation_test

## Protractor GUI automation tests written in Javascript for Zwift interview process

### How to run:

#### 1. Download the repository
Github repo link: https://github.com/Amncatlett/js_automation_test.git
Save to a folder somewhere on your local machine

#### 2. Download Node.js
Node.js Download Link https://nodejs.org/en/download/
Website includes Mac and Windows downloads
Follow the install wizard to complete installation

#### 3. Install Protractor
From terminal or command prompt run this command: npm install -g protractor

#### 4. Install Chromedriver
From terminal or command prompt run this command: npm install -g chromedriver
Also update webdriver-manager: webdriver-manager update

#### 5. Run the tests
**Note: If you're running on windows powershell, you may need to run this
command to enable running scripts on your machine: Set-ExecutionPolicy RemoteSigned

Navigate to the project config folder: js_automation_test-master/Config_Files/
Command to kick off both tests: protractor zwift_config.js

#### 6. Expected results
Upon running the test, you should see a chrome browser pop up on your screen and begin
running the test.  Do not interact with your mouse or keyboard during this test.  It 
should only take about ~20 seconds to finish.

On your terminal/prompt the test output you will see come in the form of green dots.
A green dot means a test case has passed.  If you see a red 'F', then that means a 
test case has failed.  There is also some text displayed to visually verify filters
were correctly updated on the website you are testing.


#### 7. Final thoughts
I thoroughly enjoyed working on this small project.  Even though it was small, I did
encounter a few roadblocks that typically encompass testing a new website built with
code you're not familiar with on a fresh framework.  I think that's why I enjoyed it.

#### 8. Contact me
If you have any questions or comments you'd like to send my way at any time throughout
the process, please feel free to email me.  If you'd like to call or text, please 
request my phone number through email.  I would put it here but this is a public repository.

Email Address: amncatlett@gmail.com

Thank you for running my code.  Have a good day!
