# Javascript

[jquery를 이용한 텍스트 입력 및 출력(text-input.html)](../javascript/text-input.html)

```html
<body>
  <div class="text-write" id="text-write">안녕</div>
  <input type="text" id="text-read" />
  <button type="button" id="read-btn">Show Value</button>

  <script>
    $(document).ready(function () {
      // Get value on button click and show alert
      $("#read-btn").click(function () {
        let str = $("#text-read").val();
        $("#text-write").text(str);
      });
    });
  </script>
</body>
```

[HTML 파일 읽어오기(reading-html-file.html)](../javascript/reading-html-file.html)

```html
<div data-include-path="biz-card-section.html"></div>
<script>
  window.addEventListener("load", function () {
    let allElements = document.getElementsByTagName("*");
    Array.prototype.forEach.call(allElements, function (el) {
      let includePath = el.dataset.includePath;
      if (includePath) {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            el.outerHTML = this.responseText;
          }
        };
        xhttp.open("GET", includePath, true);
        xhttp.send();
      }
    });
  });
</script>
```
