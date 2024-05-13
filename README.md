# Resize screen
Change the dimensions given for figma for other types of devices

    size = 64px;
    screen1 = 1920;
    screen2 = 1366;

    ---------- CALCULATE ----------

    screen1 = 64px;
    screen2 = 46px;



use function
    
    function sizeCalculate(screen, size) {
        const size = (screen * size) / 1920;
        return size;
    }


happy code 😎
