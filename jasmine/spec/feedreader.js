/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it(' URL not empty and defined',function(){
            allFeeds.forEach(function(feed){
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });

         });


        /* test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('name not empty and defined',function(){
            allFeeds.forEach(function(feed){
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
                expect(typeof feed.name).toEqual('string');
            });
         });

    });


    /*   test suite named "The menu" */

        it('The menu',function(){
            //check if body has class menu-hidden or not 
            it('is hidden ',function(){
            $('body').hasClass('menu-hidden').toEqual(true);                
            });

            //test changes when menu icon clicked
            it('changes when menu icon is clicked',function(){
                //check if menu hidden
                $('.menu-icon-link').click();
                expect($('body').hasClass('menu-hidden')).toEqual(true);

                //check if menu display
                $('.menu-icon-link').click();
                expect($('body').hasClass('menu-hidden')).toEqual(false);



            });

        });

        

        /*  new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

         describe('Initial Entries',function(){
            beforeEach(function(done){
                loadFeed(0,function(){
                    done();
                });
            });

            it('container should has one feed as minimum',function(){
                //check if length of entry is greater than 0
                expect($('.entry').length).toBeGreaterThan(0);

            });
         });


        
    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
         describe('New Feed Selection',function(){
            var firstFeed;
            var secondFeed;

            //test a new feed is loaded by loadFeed function()

            beforeEach(function(done){
                loadFeed(0,function(){
                    firstFeed=$('.feed').html();
                    done();
                });
            });

            //check if contents of feeds actually change or not

            it('should that the content actually changes',function(done){

                loadFeed(1,function(){
                    secondFeed=$('.feed').html();
                    expect(firstFeed).not.toBe(secondFeed);
                    done();

                });

            });
         });
}());
