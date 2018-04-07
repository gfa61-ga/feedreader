/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against our application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This test makes sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* This is a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('each feed has an URL', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });

        /* This is a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('each feed has a name', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });

    /* This test suite is about the menu */
    describe('The menu', function() {

        /* This is a test that ensures the menu element is
         * hidden by default.
         * The hiding/showing of the menu element is performed
         * by toggling the body's menu-hidden class
         */
        it('is hidden by default', function() {
            // When the page first loads, the menu must be hidden
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

         /* This is a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * has two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('changes visibility when the menu icon is clicked', function() {
            // trigger a click on the menu icon
            $('.menu-icon-link').trigger( 'click' );
            // expect that the body's menu-hidden class is toggled off
            expect($('body').hasClass('menu-hidden')).toBe(false);

            // trigger a second click on the menu icon
            $('.menu-icon-link').trigger( 'click' );
            // expect that the body's menu-hidden class is toggled back on
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

    });

    /* This is a test suite about the Initial Entries */
    describe('Initial Entries', function() {

        /* This is a test that ensures when the loadFeed
         * function is called, during the page intialization,
         * to load the Load the first feed we've defined (index of 0)
         * and completes its work, there is at least
         * a single .entry element within the .feed container.
         */

        // beforeEach will be finished only after it's 'done' function is called
        beforeEach(function(done) {
            /* The 'done' function is passed inside a callback function
             * and will be called by the loadFeed() function,
             * when this function ends its asynchronous tasks
             */
            loadFeed(0, function callDone() {
                done();
            });
        });

        // This spec will be checked after the beforeEach is finished
        it('have at least a single entry element', function() {
            // .entry elements are direct children of the .feed container
            expect($('.feed').children().length).toBeGreaterThan(0);
        });
    });

    // This test suite is about when we select a New Feed
    describe('New Feed Selection', function() {

        /* This is a test that ensures when a new feed is loaded
         * by the loadFeed function, the content actually changes.
         * To ensure this, we check that the title of feed's first
         * entry changes when we select a different feed.
         */

        var newTitleOfFirstEntry = '';

        // Before starting the test
        beforeEach(function(done) {
            // We call loadFeed to load the New-Feed with index of 1
            loadFeed(1, function callDone() {
                /* This callBack function stores the title of New-Feed's first entry, only when
                 * the loadFeed function ends its asynchronous tasks
                 */
                var newTitleOfFirstEntry = $('.feed').find('h2')[0].innerText;
                // and passes control the the suit's it spec
                done();
            });
        });

        // Now the test starts
        it('actually changes content', function(done) {
            // We call loadFeed to load the initial Feed with index of 0
            loadFeed(0, function callDone() {
                /* This callBack function checks its matcher, only when
                 * the loadFeed function ends its asynchronous tasks
                 */
                var titleOfFirstEntry = $('.feed').find('h2')[0].innerText;

                expect(titleOfFirstEntry).not.toBe(newTitleOfFirstEntry);
                // and then the test is done.
                done();
            });
        });
    });
}());
