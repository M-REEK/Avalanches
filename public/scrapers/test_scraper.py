# -*- coding: utf-8 -*-
"""
Created on Mon Feb 10 18:09:38 2020

@author: et8ge
"""

import scrapy


class QuotesSpider ( scrapy . Spider ):
    name = 'quotes'
    start_urls = [
        'http://www.data-avalanche.org/avalanche/1351431005476' ,
    ]

    def parse ( self , response ):
        for quote in response . css ( 'div.avalanche-description' ):
            yield {
                'text' : quote . css ( 'span.text::text' ) . get (),
                'author' : quote . xpath ( 'span/small/text()' ) . get (),
            }
            print(response.css('div.avalanche-description::text').get())

        #next_page = response.css('div.pull-right.prevnext > a ::attr("href")').get()
        next_page = response.css('h1 a.btn').attrib["href"]
        print("page suivante : " + str(next_page))
        if next_page is not None :
            yield response . follow ( next_page , self . parse )











