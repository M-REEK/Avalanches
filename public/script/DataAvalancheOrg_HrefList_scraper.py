# -*- coding: utf-8 -*-
"""
Created on Mon Feb 17 12:12:42 2020

@author: et8ge
"""

import scrapy

class DataAvalancheUrlListSpider(scrapy.Spider):
    name = 'DataAvalancheUrlList'
    allowed_domains = ["www.data-avalanche.org"]
    start_urls = ['http://www.data-avalanche.org/explore?winter=all']

    def parse(self, response):
        print(">>>START<<<")
        i=0
        for a in response.css('ul.list-unstyled>li.first-of-day'):
            i = i+1
            print("li "+i)
            url = "www.data-avalanche.org/" + a.css('a ::attr(ref)').get()
            print(url)
            yield {'link': url}
        print(">>>END<<<")

        #for next_page in response.css('a.next-posts-link'):
            #yield response.follow(next_page, self.parse)