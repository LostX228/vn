  width: 600px;
                height: 350px;
                font-family: 'Noto Sans TC', sans-serif;
                background-size: cover;
    
                background-position: center center;
                border-radius: 10px;
            }
    
            * {
                color: #ffffff;
                font-size: 12px;
                -webkit-touch-callout: none;
                -webkit-user-select: none;
                user-select: none;
                /* Non-prefixed version, currently */
                outline: none;
                -webkit-tap-highlight-color: transparent;
            }
    
            nobr {
                white-space: nowrap;
                display: flex;
            }
    
    
            canvas {
                position: absolute;
    
                z-index: -1;
            }
    
            .scrollbar {
                overflow-x: hidden;
                overflow-y: auto;
                -webkit-overflow-scrolling: touch;
                border-radius: 15px;
            }
    
            .scrollbar::-webkit-scrollbar {
                width: 10px;
                height: 5px;
    
            }
    
            .scrollbar::-webkit-scrollbar-track {
    
                border-radius: 15px;
            }
    
            .scrollbar::-webkit-scrollbar-thumb {
                border-radius: 15px;
                -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
                background-color: #B8B8B8;
            }
    
    
    
    
            .left {
    
    
                width: 200px;
                height: 100%;
            }
    
            .left1 {
                border-radius: 10px;
                width: 150px;
                height: 220px;
                margin-top: 15px;
                margin-left: 30px;
                background-color: rgba(3, 3, 3,0.5);;
                text-align: center;
                overflow: auto;
                border: none;
                border: 1px solid #ffffff;
                box-shadow: 0 0 0px #ffffff inset, 0 0 5px #ffffff;
            }
    
            .left1 .van-image {
                position: relative;
                display: inline-block;
                margin-top: 15px;
    
            }
    
            .left1 .van-button {
    
                text-align: center;
                font-size: 50px;
                width: 90px;
                border-radius: 5px;
                background-color: #000000;
                border: none;
                border: 1px solid #ffffff;
                box-shadow: 0 0 0px #ffffff inset, 0 0 5px #ffffff;
                margin: 10px;
    
    
            }
    
            .left2 {
                border-radius: 10px;
                width: 150px;
                height: 80px;
                margin-top: 15px;
                margin-left: 30px;
                background-color: rgba(3, 3, 3,0.5);
                display: flex;
                border: none;
                border: 1px solid #ffffff;
                box-shadow: 0 0 0px #ffffff inset, 0 0 5px #ffffff;
    
            }
    
            .left2 .van-image {
                position: relative;
                display: inline-block;
                margin-top: 23.5px;
                margin-left: 10px;
            }
    
            .left2 .font {
                margin-top: 25px;
                text-align: center;
            }
    
            .left2 font1 {
                font-size: 12px;
                margin-left: 16px;
                text-align: center;
    
            }
    
            .left2 label1 {
                font-size: 9px;
                margin-left: 30px;
                margin-top: 10px;
                text-align: center;
            }
    
            .right {
    
                height: 100%;
                overflow: auto;
            }
    
            .right1 {
                border-radius: 10px;
                width: 370px;
                height: 320px;
                margin-top: 15px;
                margin-left: 1 0px;
                background-color: rgba(3, 3, 3,0.5);;
                text-align: center;
                overflow: auto;
                border: none;
                border: 1px solid #ffffff;
                box-shadow: 0 0 0px #ffffff inset, 0 0 5px #ffffff;
            }
    
            .ayimgui {
                background-image: linear-gradient(to right, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 35%, rgb(0, 0, 0) 35%, rgb(0, 0, 0) 100%);
                position: relative;
                z-index: 1;
                height: 100%;
                border-radius: 10px;
                overflow: hidden;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
                border: 4px solid #DIR LON;
                box-shadow: 0 0 15px #DIR LON inset,#DIR LON  0 0 40px ;
                display: flex;
            }
    
            .right .van-button {
                margin: 10px;
                text-align: center;
                font-size: 50px;
                width: 100px;
                border-radius: 5px;
                background-color: #000000;
                border: none;
                border: 1px solid #ffffff;
                box-shadow: 0 0 0px #ffffff inset, 0 0 5px #ffffff;
                margin-top: 10px;
    
    
    
            }
    
            .van-button {
                margin: 10px;
                text-align: center;
                font-size: 50px;
                width: 100px;
                border-radius: 5px;
                background-color: #000000;
                border: none;
                border: 1px solid #ffffff;
                box-shadow: 0 0 0px #ffffff inset, 0 0 5px #ffffff;
    
                margin-top: 25px;
                margin-left: 25px;
    
    
            }
    
            .van-notify {
                z-index: 99;
                position: fixed;
            }
    
            .right .van-cell {
                margin: 10px;
                text-align: center;
                font-size: 50px;
                width: 188px;
                border-radius: 5px;
                background-color: #000000;
                border: none;
                border: 1px solid #ffffff;
                box-shadow: 0 0 0px #ffffff inset, 0 0 5px #ffffff;
                margin-top: 50px;
                margin-left: 100px;
            }
    
            .van-cell {
                margin: 10px;
                text-align: center;
                font-size: 50px;
                width: 400px;
                border-radius: 5px;
                background-color: #000000;
                border: none;
                border: 1px solid #ffffff;
                box-shadow: 0 0 0px #ffffff inset, 0 0 5px #ffffff;
                margin-top: 25px;
                margin-left: 25px;
            }
    
            .van-field__control {
                display: block;
                box-sizing: border-box;
                width: 100%;
                min-width: 0;
                margin: 0;
                padding: 0;
                color: white;
                line-height: inherit;
                text-align: left;
                background-color: transparent;
                border: 0;
                resize: none;
                -webkit-user-select: auto;
                user-select: auto;
         
