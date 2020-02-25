# -*- coding: utf-8 -*-
"""
Created on Thu Feb  6 15:45:14 2020

@author: et8ge
"""

import scrapy


class DataAvalancheSpider(scrapy.Spider):
    name = 'DataAvalancheOrg'
    allowed_domains = ["www.data-avalanche.org"]
    start_urls = [
        'http://www.data-avalanche.org/avalanche/50000358',
    ]

    def parse(self, response):
        #for text in response.css('div.avalanche container'):
        yield {
            'date': response.css('div.avalanche-date').get(),
            'latitude' : response.css('head > script:nth-child(13)').get(),
            #'longitude' : response.css('head > script:nth-child(13)').get()#.re("^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,6})?))$"),
        }

        next_page = response.css('div.pull-right.prevnext > a ::attr("href")').get()
        #next_page = response.css('h1 a.btn').attrib["href"]
        print("page suivante : " + str(next_page))
        if next_page is not None :
            yield response . follow ( next_page , self . parse )

#css :
#a.btn:nth-child(2)::attr("href")
#.prevnext a + a::attr("href")

#X-path :
#/html/body/div[1]/div/div[1]/div[1]/h1/div[1]/a[2]/@href
#//div[@class='spaceit']//a/@href


#'latitude' : response.xpath('string(/html/head/script[2])').re_first("(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,6})?))")

#"http://www.data-avalanche.org/avalanche/50000215"

#head > script:nth-child(13)



