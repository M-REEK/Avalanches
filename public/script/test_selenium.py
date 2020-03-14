# -*- coding: utf-8 -*-
"""
Created on Wed Mar 11 16:33:59 2020

@author: et8ge
"""

from selenium import webdriver
from selenium.webdriver.common.keys import keys
from selenium.webdriver.support.ui import WebDriverWait
from bs4 import BeautifulSoup
import pandas as pd
import re
import os

url_init = 'http://www.data-avalanche.org/explore?winter=all'

driver = webdriver.Firefox()
driver.get(url_init)
driver.implicity_wait(100)
