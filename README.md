[![Run Tests](https://github.com/LaszloFeher-XP/XP-Farm_List_Filtering/actions/workflows/test.yml/badge.svg)](https://github.com/LaszloFeher-XP/XP-Farm_List_Filtering/actions/workflows/test.yml/badge.svg) 
"[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=LaszloFeher-XP_XP-Farm_List_Filtering&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=LaszloFeher-XP_XP-Farm_List_Filtering)" 
"[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=LaszloFeher-XP_XP-Farm_List_Filtering&metric=bugs)](https://sonarcloud.io/summary/new_code?id=LaszloFeher-XP_XP-Farm_List_Filtering)" 
"[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=LaszloFeher-XP_XP-Farm_List_Filtering&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=LaszloFeher-XP_XP-Farm_List_Filtering)" 
"[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=LaszloFeher-XP_XP-Farm_List_Filtering&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=LaszloFeher-XP_XP-Farm_List_Filtering)" 
"[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=LaszloFeher-XP_XP-Farm_List_Filtering&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=LaszloFeher-XP_XP-Farm_List_Filtering)" 
"[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=LaszloFeher-XP_XP-Farm_List_Filtering&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=LaszloFeher-XP_XP-Farm_List_Filtering)" 
"[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=LaszloFeher-XP_XP-Farm_List_Filtering&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=LaszloFeher-XP_XP-Farm_List_Filtering)" 
"[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=LaszloFeher-XP_XP-Farm_List_Filtering&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=LaszloFeher-XP_XP-Farm_List_Filtering)" 
"[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=LaszloFeher-XP_XP-Farm_List_Filtering&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=LaszloFeher-XP_XP-Farm_List_Filtering)" 
[![Open Issues](https://img.shields.io/github/issues/LaszloFeher-XP/XP-Farm_List_Filtering/badge.svg)](https://github.com/LaszloFeher-XP/XP-Farm_List_Filtering/issues) 

[![Build Status](coverage/badge-branches.svg)](coverage/badge-branches.svg) 
[![Build Status](coverage/badge-functions.svg)](coverage/badge-functions.svg) 
[![Build Status](coverage/badge-lines.svg)](coverage/badge-lines.svg) 
[![Build Status](coverage/badge-statements.svg)](coverage/badge-statements.svg) 
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) 

[Metrics report](metrics.md) 
[Complexity report](complexity-report.md) 

# List Filtering

https://www.codewars.com/kata/53dbd5315a3c69eed20002dd

## Instructions 

In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
Example
```sh
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
```

## User Stories 

### 1. First story 
As a user
I want to filter out the strings from an array
So that create the logic

#### Scenarios 

#### 1. 
Given an array [1,2,'a','b'] 
When runs the logic
Then returns [1,2]

#### 2. 
Given an array [1,'a','b',0,15]
When runs the logic
Then returns [1,0,15]

#### 3. 
Given an array [1,2,'aasf','1','123',123]
When runs the logic
Then returns [1,2,123]

# Setting up the environment 

## To install dependencies 

To install dependencies, run the following: 

```npm install``` 

## To run the tests 

To run the tests, there is a script in the project root called test. It calculates code coverage, incorporates watch mode, and prints in verbose mode, so all test file's test report will be visible. Alternatively, you can achieve the same with the command the script contains: 

```npm test -- --watchAll --collect-coverage --verbose```  

