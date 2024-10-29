var posts=["2024/10/27/STM32-ADC-Application-Note-1/","2024/10/29/STM32-FreeRtos-V1-应用手册1/","2024/10/28/马克思主义基本原理/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };