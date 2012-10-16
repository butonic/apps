/**
* ownCloud - News app
*
* @author Bernhard Posselt
* Copyright (c) 2012 - Bernhard Posselt <nukeawhale@gmail.com>
*
* This file is licensed under the Affero General Public License version 3 or later.
* See the COPYING-README file
*
*/

/**
 * The cache is used to cache items and tell the program which items have been
 * loaded
 */

var News = News || {};

(function(exports) {

    var Cache = function(batchSize){
        this.batchSize = batchSize;
        this.reset();
    };


    Cache.prototype.reset = function(){
        this.items = [];
        this.feeds = [];
    };

    Cache.prototype.setItem = function(item) {
        this.items[item.getId()] = item;
        this.feeds[item.getFeedId()][item.getId()] = item;
    };

    Cache.prototype.removeItem = function(item) {
        delete this.items[item.getId()];
        delete this.feeds[item.getFeedId()][item.getId()];
    };

    exports.Cache = Cache;

})(News);
