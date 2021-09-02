var i = 0;
        var txt = 'Welcome to an Official Website of ATU Company. Now your ideas are more respectable, So be a great valueable asset to ATU and generate new ideas that will top Up on our Company, ***Thanks For Being Part Of Us***';
        var speed = 60;  
        function typeWriter()
        {
          if (i < txt.length)
            {
                document.getElementById("demo").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
                }
            }