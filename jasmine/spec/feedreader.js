$(function() {
    
    describe('RSS Feeds', function() {
        /* Tests to make sure that the allFeeds variable has been 
         * defined and that it is not empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Test that loops through each feed in the allFeeds object 
         * and ensures it has a URL defined and that the URL is not empty.
         */
        it('url defined and not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe("");
            });
        });
        

        /* Test that loops through each feed in the allFeeds object 
         * and ensures it has a name defined and that the name is not empty.
         */
        it('name defined and not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });


   
    describe('The menu', function() {

        /* Test that ensures the menu element is
         * hidden by default.
         */
        it('menu hidden', function() {
           expect($('body').hasClass("menu-hidden")).toBe(true);
        });

         /* Test that ensures the menu changes
          * visibility when the menu icon is clicked.
          */
         it('menu visibility onClick', function() {
            $('a.menu-icon-link').trigger('click');
            expect($('body').hasClass("menu-hidden")).toBe(false);
            $('a.menu-icon-link').trigger('click');
            expect($('body').hasClass("menu-hidden")).toBe(true);
         });
    });

    
    describe('Initial Entries', function() {

        /*Test that ensures when the loadFeed function is called 
         * and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('are entries', function(done) {
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
        });
    });

        

    describe('New Feed Selection', function() {

        /* test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        let initialFeed, nextFeed;
        beforeEach(function(done) {
            loadFeed(0, function() {
                initialFeed = $('.feed').html();
                loadFeed(1, function() {
                    nextFeed = $('.feed').html();
                    done();
                });
            });
        });

        it('is new loaded', function(done) {
            expect(nextFeed).not.toBe(initialFeed);
            done();
        });
    });

        
}());
