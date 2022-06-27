
# ![AlertBox](https://github.com/simple-alertbox/alertbox/blob/main/alert.png)
A simple, beautiful, responsive, easy to use, customizable text for JavaScript's Alert Box.
* How to install

```
<script src="https://cdn.jsdelivr.net/gh/noumanqamar450/alertbox@main/version/1.0.2/alertbox.min.js"></script>
```
This tag will be used in the footer.

* For AlertBox function call

```
  alertbox.render({
      alertIcon: 'success',
      title: 'Thank You!',
      message: 'AlertBox Popup Message',
      btnTitle: 'Ok',
      themeColor: 'purple',
      btnColor: 'green',
      border:true
  });
```
# Use AlertBox:
For Success
```
  alertbox.render({
     alertIcon: 'success',
     title: 'Title',
     message: 'AlertBox Message',
     btnTitle: 'Ok'
  });
```
For Error
```
  alertbox.render({
     alertIcon: 'error',
     title: 'Title',
     message: 'AlertBox Message',
     btnTitle: 'OK'
  });
```
For Warning
```
  alertbox.render({
     alertIcon: 'warning',
     title: 'Title',
     message: 'AlertBox Message',
     btnTitle: 'OK'
  });
```
For Information
```
  alertbox.render({
     alertIcon: 'info',
     title: 'Title',
     message: 'AlertBox Message',
     btnTitle: 'OK'
  });
```
For Question
```
  alertbox.render({
     alertIcon: 'question',
     title: 'Title',
     message: 'AlertBox Message',
     btnTitle: 'OK'
  });
```
If you want a custom alert theme colour, then you add this code
```
  alertbox.render({
     alertIcon: 'success',
     title: 'Title',
     message: 'AlertBox Message',
     btnTitle: 'OK',
     themeColor: '#000000'
  });
```
If you want a custom button colour, then you add this code
```
  alertbox.render({
     alertIcon: 'success',
     title: 'Title',
     message: 'AlertBox Message',
     btnTitle: 'OK',
     themeColor: '#000000',
     btnColor: '#7CFC00'
  });
```
If you want border, then you add this code. Otherwise, the border will be false۔
```
  alertbox.render({
     alertIcon: 'success',
     title: 'Title',
     message: 'AlertBox Message',
     btnTitle: 'OK',
     themeColor: '#000000',
     btnColor: '#7CFC00',
     border:true
  });
```
 
 # Demo
 Alertbox Demo -> [Alertbox](https://alertbox.js.org)
 
 # Author
 Instgram. [@noumanqamar.official](https://www.instagram.com/noumanqamar.official/)
 
 # Donation
 Buy Me A Book: [Donate](https://www.buymeacoffee.com/antech)
 
 # LICENSE
 This project is licensed under the [MIT License] License - see the LICENSE.md file for details
