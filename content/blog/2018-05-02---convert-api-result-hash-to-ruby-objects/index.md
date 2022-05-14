---
title: 'Convert API Result Hash to Ruby Objects'
slug: '/convert-api-result-hash-to-ruby-objects'
date: '2018-05-02T14:40:20.000Z'
featured: false
draft: false
tags: ['rails', 'ruby', 'api', 'json']
description: ''
---

Note: Examples shown in this post are a fraction or a sample response returned from Lazada Open Platform:

Without a sophisticated Ruby SDK, REST APIs return queries in JSON format. This is how we normally handle the results returned from API in Ruby:
```ruby
result = [{"is_sale_prop"=>0, "name"=>"name", "input_type"=>"text", "options"=>[], "is_mandatory"=>1, "attribute_type"=>"normal", "label"=>"Name"},
 {"is_sale_prop"=>0, "name"=>"short_description", "input_type"=>"richText", "options"=>[], "is_mandatory"=>1, "attribute_type"=>"normal", "label"=>"Highlights"},
 {"is_sale_prop"=>0, "name"=>"description", "input_type"=>"richText", "options"=>[], "is_mandatory"=>0, "attribute_type"=>"normal", "label"=>"Product Description"},
 {"is_sale_prop"=>0, "name"=>"video", "input_type"=>"text", "options"=>[], "is_mandatory"=>0, "attribute_type"=>"normal", "label"=>"Video URL"},
 {"is_sale_prop"=>0, "name"=>"brand", "input_type"=>"singleSelect", "options"=>[], "is_mandatory"=>1, "attribute_type"=>"normal", "label"=>"Brand"},
 {"is_sale_prop"=>0, "name"=>"model", "input_type"=>"text", "options"=>[], "is_mandatory"=>1, "attribute_type"=>"normal", "label"=>"Model"}]
```

Take a look at the first element in the array:
```ruby
> a_hash = result.first
# => {"is_sale_prop"=>0, "name"=>"name", "input_type"=>"text", "options"=>[], "is_mandatory"=>1, "attribute_type"=>"normal", "label"=>"Name"}
```

In this way the value `input_type` can be obtained by the hash key:
```ruby
> a_hash["input_type"]
# => "text"
```

This is acceptable in cases where the hash is not frequently being accessed. But in cases of heavy usage especially when processing multiple API results, you can make your code better or tidier by converting the API result from hash to an object:
```ruby
> category_attributes = JSON.parse(result.to_json, object_class: OpenStruct)
=> [#<OpenStruct is_sale_prop=0, name="name", input_type="text", options=[], is_mandatory=1, attribute_type="normal", label="Name">,
 #<OpenStruct is_sale_prop=0, name="short_description", input_type="richText", options=[], is_mandatory=1, attribute_type="normal", label="Highlights">,
 #<OpenStruct is_sale_prop=0, name="description", input_type="richText", options=[], is_mandatory=0, attribute_type="normal", label="Product Description">,
 #<OpenStruct is_sale_prop=0, name="video", input_type="text", options=[], is_mandatory=0, attribute_type="normal", label="Video URL">,
 #<OpenStruct is_sale_prop=0, name="brand", input_type="singleSelect", options=[], is_mandatory=1, attribute_type="normal", label="Brand">,
 #<OpenStruct is_sale_prop=0, name="model", input_type="text", options=[], is_mandatory=1, attribute_type="normal", label="Model">]
```

Now we can access the attribute directly:

```ruby
# get the value via object attribute
> category_attributes.first.input_type
=> "text"

# you can treat it as a hash too
> category_attributes.first["input_type"]
=> "text"
```

Sometimes you have API result which is returned as camel case, but snake case is the de facto standard in Ruby. The example below shows the that camel case is being used in some keys e.g. `Status`, `SellerSku` and `ShopSku`.
```ruby
response = {"code"=>"0",
 "data"=>
  {"total_products"=>"10",
   "products"=>
    [{"skus"=>
       [{"Status"=>"active",
         "quantity"=>0,
         "product_weight"=>"0.03",
         "Image2"=>"http://sg-live-01.slatic.net/p/BUYI1-catalog.jpg",
         "SellerSku"=>"39817:01:01",
         "ShopSku"=>"BU565ELAX8AGSGAMZ-1104491",
         "Url"=>"https://alice.lazada.sg/asd-1083832.html",
         "package_width"=>"10.00",
         "special_to_time"=>"2020-02-0300:00",
         "special_from_time"=>"2015-07-3100:00",
         "package_height"=>"4.00",
         "special_price"=>9,
         "price"=>32,
         "package_length"=>"10.00",
         "package_weight"=>"0.04",
         "Available"=>0,
         "special_to_date"=>"2020-02-03"}],
      "primary_category"=>"10000211",
      "attributes"=>{"short_description"=>"Short Description", "name"=>"asd", "description"=>"Description", "warranty_type"=>"International Manufacturer", "brand"=>"Asante"}},
     {"skus"=>
       [{"Status"=>"active",
         "quantity"=>0,
         "product_weight"=>"0.03",
         "Image2"=>"http://sg-live-01.slatic.net/p/BUYI1-catalog.jpg",
         "SellerSku"=>"39817:01:01",
         "ShopSku"=>"BU565ELAX8AGSGAMZ-1104491",
         "Url"=>"https://alice.lazada.sg/asd-1083832.html",
         "package_width"=>"10.00",
         "special_to_time"=>"2020-02-0300:00",
         "special_from_time"=>"2015-07-3100:00",
         "package_height"=>"4.00",
         "special_price"=>9,
         "price"=>32,
         "package_length"=>"10.00",
         "package_weight"=>"0.04",
         "Available"=>0,
         "special_to_date"=>"2020-02-03"}],
      "primary_category"=>"10000211",
      "attributes"=>{"short_description"=>"Short description", "name"=>"asd", "description"=>"Description", "warranty_type"=>"International Manufacturer", "brand"=>"Asante"}}]},
 "request_id"=>"0ba2887315178178017221014"}
```

It's totally fine if you want the hash keys to remain as camelcase, but if you want to convert the keys to snake case instead, Rails provides a helper to transform your hash keys to underscore:
```ruby
> response.deep_transform_keys { |key| key.to_s.underscore }
=> {"code"=>"0",
 "data"=>
  {"total_products"=>"10",
   "products"=>
    [{"skus"=>
       [{"status"=>"active",
         "quantity"=>0,
         "product_weight"=>"0.03",
         "image2"=>"http://sg-live-01.slatic.net/p/BUYI1-catalog.jpg",
         "seller_sku"=>"39817:01:01",
         "shop_sku"=>"BU565ELAX8AGSGAMZ-1104491",
         "url"=>"https://alice.lazada.sg/asd-1083832.html",
         "package_width"=>"10.00",
         "special_to_time"=>"2020-02-0300:00",
         "special_from_time"=>"2015-07-3100:00",
         "package_height"=>"4.00",
         "special_price"=>9,
         "price"=>32,
         "package_length"=>"10.00",
         "package_weight"=>"0.04",
         "available"=>0,
         "special_to_date"=>"2020-02-03"}],
      "primary_category"=>"10000211",
      "attributes"=>{"short_description"=>"Short Description", "name"=>"asd", "description"=>"Description", "warranty_type"=>"International Manufacturer", "brand"=>"Asante"}},
     {"skus"=>
       [{"status"=>"active",
         "quantity"=>0,
         "product_weight"=>"0.03",
         "image2"=>"http://sg-live-01.slatic.net/p/BUYI1-catalog.jpg",
         "seller_sku"=>"39817:01:01",
         "shop_sku"=>"BU565ELAX8AGSGAMZ-1104491",
         "url"=>"https://alice.lazada.sg/asd-1083832.html",
         "package_width"=>"10.00",
         "special_to_time"=>"2020-02-0300:00",
         "special_from_time"=>"2015-07-3100:00",
         "package_height"=>"4.00",
         "special_price"=>9,
         "price"=>32,
         "package_length"=>"10.00",
         "package_weight"=>"0.04",
         "available"=>0,
         "special_to_date"=>"2020-02-03"}],
      "primary_category"=>"10000211",
      "attributes"=>{"short_description"=>"Short description", "name"=>"asd", "description"=>"Description", "warranty_type"=>"International Manufacturer", "brand"=>"Asante"}}]},
 "request_id"=>"0ba2887315178178017221014"}
```

These snippets comes in handy while dealing with external APIs which the response returned is not under control. While using hash or keys with camel case won't cause any problem, but it might somehow hurt the readability of the code when hash is frequently being used while processing the response, which happened in one of our project. Converting the hash to object is recommended unless memory and performance tweaking is in priority.

## External reading
1. https://coderwall.com/p/74rajw/convert-a-complex-nested-hash-to-an-object
2. https://stackoverflow.com/questions/8706930/converting-nested-hash-keys-from-camelcase-to-snake-case-in-ruby/40093995?noredirect=1#comment72573345_40093995