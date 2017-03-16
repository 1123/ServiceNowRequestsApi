This project provides a scripted REST Api for getting all request related information from ServiceNow. 
This project is work in progress. Feedback, feature requests, bug reports and pull requests are very welcome. 

#### Use-Case

1. Consider a ServiceNow instance with a configurable laptop in the service catalog. 

2. The laptop can be ordered by filling out a form, thereby specifying the
amount of RAM, the amount of disk space, the processor type, the screen size, and some other input parameters. 

3. Ordering one of these laptops results in a ServiceNow service request.

4. This service request is stored within the ServiceNow CMDB, whereby the data is spread over multiple tables: 
   `sc_request`, `sc_request_item`, `sc_item_option_mtom`, `sc_item_option` and `sc_item_option_new`. 

5. Imagine that you need to write an application that retrieves all information regarding new requests from 
ServiceNow and automates their fulfillment. 
   
The tables mentioned above can be queried via the table API provided by
ServiceNow, but assembling all required information on the client side is a
cumbersome and error-prone process since it requires many https requests,
filters and joins between tables. Therefore this project provides a server side
scripted REST API for getting all request related information with a single http request.

#### Installation

Copy the contents of the file `js/requests.js` and insert it into a newly created
scripted REST api endpoint on your ServiceNow installation.

#### Testing

Adapt the script `bash/getRequests.sh` to use your ServiceNow API endpoint, username and password. Then run the script.

