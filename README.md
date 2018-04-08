# Feed Reader Testing using Jasmine

[This](https://gfa61-ga.github.io/feedreader) is a web-based application that reads RSS feeds, which includes a number of tests to make sure future feature development will not break existing features.

## Installation and Run
Clone the GitHub repository and open the index.html file in any browser to **run** the application.

* git clone https://github.com/gfa61-ga/feedreader.git
* cd feedreader
* start index.html

## The tests

The provided tests ensure that:

RSS Feeds
* are defined
* each feed has an URL
* each feed has a name

The menu
* is hidden by default
* changes visibility when the menu icon is clicked

Initial Entries
* have at least a single entry element

New Feed Selection
* actually changes content

## Dependencies

The application's code is based on the code of [Udacity/frontend-nanodegree-feedreader](https://github.com/udacity/frontend-nanodegree-feedreader) repository for the Front End Develpmpent students.

## License
This code is distributed under the [MIT license](https://opensource.org/licenses/MIT).