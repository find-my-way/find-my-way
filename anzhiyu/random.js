var posts=["2024/10/27/STM32-ADC-Application-Note-1/","2024/10/29/STM32-FreeRtos-V1-应用手册1/","2024/11/01/唯物辩证论/","2024/10/28/马克思主义基本原理/","2024/11/21/过孔与导线之间的串扰/","2024/11/17/高数解题思路1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };