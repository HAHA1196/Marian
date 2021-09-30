import React from "react";
import "../css/Animation.css";
import '../css/font-awesome-4.7.0/css/font-awesome.css'
import animation1 from "../img/鯨魚去背.png";


class Animation extends React.Component {
    animationStart = () => {
        const text = document.querySelectorAll(".thePaths");
        for (let k = 0; k < text.length; k++) {
            console.log(`text number ${k} length is ${text[k].getTotalLength()}`);
        }

        const lastWord = document.querySelector("#stTen");
        const animation = document.querySelector("div.teaserAnimation");
        lastWord.addEventListener("animationend", () => {
            animation.style = "transition:all 2.5s ease; opacity:0; pointer-events:none;";
        })
      }

    componentDidMount(){
    this. animationStart();
    }

    render() {
        return (
            <React.Fragment>
                <div class="teaserAnimation"> 
                <div class="eleContainer"> 
                <div class="eleImg"><img src={animation1} alt="" /></div>
                <div class="eleCircle">
                <svg style={{width:'502', height:'502'}}  viewBox="0 0 502 502" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M500 251C500 388.519 388.519 500 251 500C113.481 500 2 388.519 2 251C2 113.481 113.481 2 251 2C388.519 2 500 113.481 500 251Z"
                        stroke="#FFE6B7" stroke-width="4" id="ecOne" class="thePaths" />
                </svg>
            </div>
            <div class="eleText">
                <div class="marianText">
                    <svg style={{width:'96', height:'96'}} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg"
                        class="fillanimation">
                        <path
                            d="M22.7542 4.75768L22.1251 3.1875H20.4336H5.90234H3.40234V5.6875V91V93.5H5.90234H17.1523H19.6523V91V57.7773V57.7384L19.6511 57.6994L18.9735 35.9796L41.6716 91.9397L42.3045 93.5H43.9883H52.6016H54.2856L54.9184 91.9393L77.7017 35.7438L77.0558 57.7038L77.0547 57.7406V57.7773V91V93.5H79.5547H90.8047H93.3047V91V5.6875V3.1875H90.8047H76.2148H74.5233L73.8942 4.75768L48.3242 68.5752L22.7542 4.75768Z"
                            stroke="white" stroke-width="3.5" id="mtOne" class="thePaths" />
                    </svg>

                    <svg style={{width:'63', height:'77'}} viewBox="0 0 63 77" fill="none" xmlns="http://www.w3.org/2000/svg"
                        class="fillanimation">
                        <path
                            d="M44.1077 71.118L44.7987 72.5H46.3438H57.7109H60.2109V70V69.0625V68.5458L60.0061 68.0714C58.7108 65.0717 57.9844 60.8243 57.9844 55.1758V25.9961V25.9656L57.9836 25.9351C57.8135 18.958 55.4423 13.2322 50.6929 9.06272C45.9656 4.87313 39.5852 2.92969 31.8711 2.92969C26.9435 2.92969 22.3553 3.8502 18.1409 5.72328L18.1409 5.72327L18.1323 5.72714C13.9721 7.59497 10.5763 10.1835 8.02824 13.5224L8.02522 13.5264C5.5241 16.8173 4.17578 20.3834 4.17578 24.1797V26.6797H6.67578H17.5742H20.0742V24.1797C20.0742 22.3413 20.8833 20.6695 22.9952 19.0934C25.1051 17.5189 27.7958 16.6602 31.2266 16.6602C35.2332 16.6602 37.8357 17.6838 39.4783 19.3264L39.486 19.334L39.4938 19.3417C41.1903 21.009 42.1445 23.3245 42.1445 26.582V29.0625H34.0977C24.7008 29.0625 17.0388 30.9522 11.4161 35.0486C5.71949 39.188 2.88672 45.0844 2.88672 52.4219C2.88672 58.5503 5.17275 63.7258 9.69897 67.7639L9.7086 67.7725L9.71831 67.781C14.2729 71.7608 20.0271 73.6719 26.7734 73.6719C32.9025 73.6719 38.3704 71.8253 43.1148 68.1967C43.3914 69.3524 43.7175 70.3376 44.1077 71.118ZM36.7741 56.9361C34.0932 58.4828 31.2996 59.2383 28.3555 59.2383C25.2689 59.2383 22.9673 58.4182 21.2384 56.9575C19.6205 55.5907 18.7266 53.6807 18.7266 50.8984C18.7266 47.8883 19.9255 45.8001 22.4699 44.3109C25.221 42.7007 29.6698 41.7383 36.1484 41.7383H42.1445V51.6425C41.0081 53.7361 39.2534 55.5058 36.7741 56.9361Z"
                            stroke="white" stroke-width="3.5" id="mtTwo" class="thePaths fillanimation" />
                    </svg>

                    <svg style={{width:'41', height:'75'}} viewBox="0 0 41 75" fill="none" xmlns="http://www.w3.org/2000/svg"
                        class="fillanimation">
                        <path
                            d="M35.4367 18.7941L38.3477 19.2793V16.3281V6.25V4.70492L36.9657 4.01393C35.3583 3.21024 33.2972 2.92969 31.043 2.92969C26.0375 2.92969 21.7543 4.43407 18.2693 7.37417L18.2493 6.54158L18.1907 4.10156H15.75H5.20312H2.70312V6.60156V70V72.5H5.20312H16.043H18.543V70V25.521C19.6279 23.1305 21.0927 21.4366 22.8943 20.3061C24.82 19.0976 27.3148 18.418 30.5156 18.418C32.3121 18.418 33.9503 18.5464 35.4367 18.7941Z"
                            stroke="white" stroke-width="3.5" id="mtThree" class="thePaths" />
                    </svg>

                    <svg style={{width:'24', height:'97'}} viewBox="0 0 24 97" fill="none" xmlns="http://www.w3.org/2000/svg"
                        class="fillanimation">
                        <path
                            d="M16.9805 94.5H19.4805V92V28.6016V26.1016H16.9805H6.14062H3.64062V28.6016V92V94.5H6.14062H16.9805ZM4.98849 5.65632L4.97337 5.67306L4.95855 5.69008C3.46879 7.40054 2.76172 9.48532 2.76172 11.7852C2.76172 14.0841 3.46922 16.1673 4.98551 17.8521L5.00066 17.8689L5.01611 17.8855C6.71941 19.7104 9.07582 20.4375 11.6484 20.4375C14.2211 20.4375 16.5775 19.7104 18.2808 17.8855C19.8499 16.2042 20.5938 14.1097 20.5938 11.7852C20.5938 9.46025 19.8507 7.36393 18.3084 5.65632C16.611 3.77708 14.2452 3.01562 11.6484 3.01562C9.05163 3.01562 6.68587 3.77708 4.98849 5.65632Z"
                            stroke="white" stroke-width="3.5" id="mtFour" class="thePaths" />
                    </svg>

                    <svg style={{width:'63', height:'77'}} viewBox="0 0 63 77" fill="none" xmlns="http://www.w3.org/2000/svg"
                        class="fillanimation">
                        <path
                            d="M44.1077 71.118L44.7987 72.5H46.3438H57.7109H60.2109V70V69.0625V68.5458L60.0061 68.0714C58.7108 65.0717 57.9844 60.8243 57.9844 55.1758V25.9961V25.9656L57.9836 25.9351C57.8135 18.958 55.4423 13.2322 50.6929 9.06272C45.9656 4.87313 39.5852 2.92969 31.8711 2.92969C26.9435 2.92969 22.3553 3.8502 18.1409 5.72328L18.1409 5.72327L18.1323 5.72714C13.9721 7.59497 10.5763 10.1835 8.02824 13.5224L8.02522 13.5264C5.5241 16.8173 4.17578 20.3834 4.17578 24.1797V26.6797H6.67578H17.5742H20.0742V24.1797C20.0742 22.3413 20.8833 20.6695 22.9952 19.0934C25.1051 17.5189 27.7958 16.6602 31.2266 16.6602C35.2332 16.6602 37.8357 17.6838 39.4783 19.3264L39.486 19.334L39.4938 19.3417C41.1903 21.009 42.1445 23.3245 42.1445 26.582V29.0625H34.0977C24.7008 29.0625 17.0388 30.9522 11.4161 35.0486C5.71949 39.188 2.88672 45.0844 2.88672 52.4219C2.88672 58.5503 5.17275 63.7258 9.69897 67.7639L9.7086 67.7725L9.71831 67.781C14.2729 71.7608 20.0271 73.6719 26.7734 73.6719C32.9025 73.6719 38.3704 71.8253 43.1148 68.1967C43.3914 69.3524 43.7175 70.3376 44.1077 71.118ZM36.7741 56.9361C34.0932 58.4828 31.2996 59.2383 28.3555 59.2383C25.2689 59.2383 22.9673 58.4182 21.2384 56.9575C19.6205 55.5907 18.7266 53.6807 18.7266 50.8984C18.7266 47.8883 19.9255 45.8001 22.4699 44.3109C25.221 42.7007 29.6698 41.7383 36.1484 41.7383H42.1445V51.6425C41.0081 53.7361 39.2534 55.5058 36.7741 56.9361Z"
                            stroke="white" stroke-width="3.5" id="mtFive" class="thePaths" />
                    </svg>

                    <svg style={{width:'61', height:'75'}} viewBox="0 0 61 75" fill="none" xmlns="http://www.w3.org/2000/svg"
                        class="fillanimation">
                        <path
                            d="M17.9546 6.49138L17.8492 4.10156H15.457H5.20312H2.70312V6.60156V70V72.5H5.20312H16.043H18.543V70V25.4194C19.8267 22.9686 21.5427 21.0035 23.6956 19.4838C25.8954 17.9311 28.4682 17.1289 31.5117 17.1289C35.471 17.1289 37.8525 18.1272 39.2305 19.6113L39.2386 19.62L39.2468 19.6286C40.7035 21.1678 41.6887 23.8072 41.7266 28.0578V70V72.5H44.2266H55.0664H57.5664V70V28.1055V28.0958L57.5663 28.0861C57.5053 20.2098 55.7169 13.8426 51.7739 9.43235C47.7806 4.9659 41.9624 2.92969 34.793 2.92969C28.3132 2.92969 22.703 4.86822 18.0523 8.70589L17.9546 6.49138Z"
                            stroke="white" stroke-width="3.5" id="mtSix" class="thePaths" />
                    </svg>
                </div>

                <div class="sloganText">
                    <svg style={{width:'25', height:'36'}} viewBox="0 0 25 36" fill="none" xmlns="http://www.w3.org/2000/svg"
                        class="fillanimation">
                        <path
                            d="M23.0742 29.7803V28.2803H21.5742H8.92383V3.14062V1.64062H7.42383H3.46582H1.96582V3.14062V33V34.5H3.46582H21.5742H23.0742V33V29.7803Z"
                            stroke="white" stroke-width="1" id="stOne" class="thePaths" />
                    </svg>


                    <svg style={{width:'27', height:'30'}} viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg"
                        class="fillanimation">
                        <path
                            d="M5.65073 24.4911L5.65432 24.4949C7.85464 26.7909 10.709 27.9102 14.0791 27.9102C18.2505 27.9102 21.5388 26.2688 23.7035 22.9421L24.4551 21.7872L23.3679 20.9406L21.0505 19.1359L19.8626 18.2108L18.942 19.4022C18.3548 20.162 17.6836 20.7558 16.9279 21.2003C16.2785 21.5823 15.4208 21.8135 14.2842 21.8135C12.8026 21.8135 11.6523 21.3088 10.7186 20.295C10.0604 19.5606 9.59649 18.6422 9.36525 17.4922H22.7334H24.2334V15.9922V14.4131C24.2334 10.6665 23.3887 7.55075 21.4816 5.28503C19.5495 2.98963 16.8553 1.90039 13.6074 1.90039C11.5468 1.90039 9.62436 2.48043 7.87071 3.61757C6.11954 4.74824 4.76773 6.31817 3.81025 8.27945L3.81025 8.27944L3.8081 8.28388C2.86165 10.2388 2.40723 12.4297 2.40723 14.8232V15.5205C2.40723 19.1288 3.44515 22.1737 5.65073 24.4911ZM10.8458 9.22558L10.8459 9.2256L10.8521 9.21887C11.6067 8.40466 12.4929 8.01758 13.6074 8.01758C14.8185 8.01758 15.6418 8.40498 16.2502 9.10289L16.2502 9.10291L16.2565 9.1101C16.7162 9.6306 17.0793 10.3623 17.2823 11.375H9.66083C9.94552 10.4537 10.3523 9.75156 10.8458 9.22558Z"
                            stroke="white" stroke-width="1" id="stTwo" class="thePaths" />
                    </svg>

                    <svg style={{width:'25', height:'30'}} viewBox="0 0 25 30" fill="none" xmlns="http://www.w3.org/2000/svg"
                        class="fillanimation">
                        <path
                            d="M15.7221 18.9354L15.734 18.9443L15.7462 18.9531C16.1033 19.21 16.291 19.533 16.291 20.1143C16.291 20.536 16.1448 20.8685 15.6441 21.2056C15.1075 21.5625 14.2815 21.8135 13.0332 21.8135C11.716 21.8135 10.8121 21.5052 10.1854 21.0256C9.60352 20.5581 9.28658 19.9563 9.24002 19.0904L9.16371 17.6709H7.74219H3.94824H2.44824V19.1709C2.44824 20.7957 2.928 22.3094 3.85323 23.6807L3.85906 23.6894L3.86502 23.698C4.8124 25.0609 6.10473 26.1005 7.68955 26.8295C9.28574 27.5638 11.0782 27.9102 13.0332 27.9102C15.7968 27.9102 18.1965 27.2581 20.1061 25.826L20.1061 25.826L20.1126 25.821C22.0706 24.3357 23.085 22.3016 23.085 19.8477C23.085 18.4146 22.7368 17.099 21.9606 15.9845C21.2178 14.8848 20.1234 14.0253 18.79 13.3586C17.4664 12.6967 15.8004 12.1578 13.8325 11.7188C11.9577 11.2976 10.8815 10.8974 10.3978 10.5871C10.1353 10.4186 10.001 10.2227 10.001 9.77832C10.001 9.28011 10.169 8.92957 10.5865 8.60731C11.0158 8.27594 11.7303 8.01758 12.9102 8.01758C13.9525 8.01758 14.6949 8.30201 15.2548 8.78314L15.2547 8.78317L15.2635 8.79059C15.8609 9.29607 16.0654 9.79057 16.0654 10.332V11.832H17.5654H21.3799H22.8799V10.332C22.8799 7.85817 21.8917 5.77517 19.9793 4.19424C18.0916 2.62225 15.6886 1.90039 12.9102 1.90039C10.2446 1.90039 7.92032 2.60673 6.05686 4.12388L6.05685 4.12387L6.0518 4.12802C4.20914 5.64163 3.20703 7.59018 3.20703 9.90137C3.20703 11.2488 3.53932 12.4936 4.26207 13.5684L4.267 13.5758L4.27202 13.583C4.99644 14.6335 6.04879 15.4636 7.32498 16.1173L7.32497 16.1173L7.33153 16.1206C8.62545 16.7754 10.2876 17.3012 12.2677 17.7255L12.2699 17.7259C14.1634 18.1288 15.2338 18.5691 15.7221 18.9354Z"
                            stroke="white" stroke-width="1" id="stThree" class="thePaths" />
                    </svg>

                    <svg style={{width:'25', height:'30',marginRight: '15px'}} viewBox="0 0 25 30" fill="none" xmlns="http://www.w3.org/2000/svg"
                        class="fillanimation">
                        <path
                            d="M15.7221 18.9354L15.734 18.9443L15.7462 18.9531C16.1033 19.21 16.291 19.533 16.291 20.1143C16.291 20.536 16.1448 20.8685 15.6441 21.2056C15.1075 21.5625 14.2815 21.8135 13.0332 21.8135C11.716 21.8135 10.8121 21.5052 10.1854 21.0256C9.60352 20.5581 9.28658 19.9563 9.24002 19.0904L9.16371 17.6709H7.74219H3.94824H2.44824V19.1709C2.44824 20.7957 2.928 22.3094 3.85323 23.6807L3.85906 23.6894L3.86502 23.698C4.8124 25.0609 6.10473 26.1005 7.68955 26.8295C9.28574 27.5638 11.0782 27.9102 13.0332 27.9102C15.7968 27.9102 18.1965 27.2581 20.1061 25.826L20.1061 25.826L20.1126 25.821C22.0706 24.3357 23.085 22.3016 23.085 19.8477C23.085 18.4146 22.7368 17.099 21.9606 15.9845C21.2178 14.8848 20.1234 14.0253 18.79 13.3586C17.4664 12.6967 15.8004 12.1578 13.8325 11.7188C11.9577 11.2976 10.8815 10.8974 10.3978 10.5871C10.1353 10.4186 10.001 10.2227 10.001 9.77832C10.001 9.28011 10.169 8.92957 10.5865 8.60731C11.0158 8.27594 11.7303 8.01758 12.9102 8.01758C13.9525 8.01758 14.6949 8.30201 15.2548 8.78314L15.2547 8.78317L15.2635 8.79059C15.8609 9.29607 16.0654 9.79057 16.0654 10.332V11.832H17.5654H21.3799H22.8799V10.332C22.8799 7.85817 21.8917 5.77517 19.9793 4.19424C18.0916 2.62225 15.6886 1.90039 12.9102 1.90039C10.2446 1.90039 7.92032 2.60673 6.05686 4.12388L6.05685 4.12387L6.0518 4.12802C4.20914 5.64163 3.20703 7.59018 3.20703 9.90137C3.20703 11.2488 3.53932 12.4936 4.26207 13.5684L4.267 13.5758L4.27202 13.583C4.99644 14.6335 6.04879 15.4636 7.32498 16.1173L7.32497 16.1173L7.33153 16.1206C8.62545 16.7754 10.2876 17.3012 12.2677 17.7255L12.2699 17.7259C14.1634 18.1288 15.2338 18.5691 15.7221 18.9354Z"
                            stroke="white" stroke-width="1" id="stFour" class="thePaths" />
                    </svg>

                    <svg style={{width:'12', height:'37'}} viewBox="0 0 12 37" fill="none" xmlns="http://www.w3.org/2000/svg"
                        class="fillanimation">
                        <path
                            d="M7.99316 35.5H9.49316V34V11.8105V10.3105H7.99316H4.19922H2.69922V11.8105V34V35.5H4.19922H7.99316ZM3.33216 3.36078L3.32308 3.37083L3.31419 3.38104C2.68401 4.10458 2.3916 4.98436 2.3916 5.9248C2.3916 6.86472 2.68427 7.74845 3.33037 8.46634L3.33946 8.47644L3.34873 8.48637C4.09727 9.28838 5.11073 9.57812 6.12695 9.57812C7.14318 9.57812 8.15663 9.28838 8.90518 8.48637C9.57324 7.77058 9.88281 6.88005 9.88281 5.9248C9.88281 4.96931 9.57373 4.08262 8.92175 3.36078C8.17676 2.53597 7.15769 2.23047 6.12695 2.23047C5.09621 2.23047 4.07715 2.53597 3.33216 3.36078Z"
                            stroke="white" stroke-width="1" id="stFive" class="thePaths" />
                    </svg>
                    <svg style={{width:'25', height:'30',marginRight: '15px'}} viewBox="0 0 25 30" fill="none" xmlns="http://www.w3.org/2000/svg"
                        class="fillanimation" >
                        <path
                            d="M15.7221 18.9354L15.734 18.9443L15.7462 18.9531C16.1033 19.21 16.291 19.533 16.291 20.1143C16.291 20.536 16.1448 20.8685 15.6441 21.2056C15.1075 21.5625 14.2815 21.8135 13.0332 21.8135C11.716 21.8135 10.8121 21.5052 10.1854 21.0256C9.60352 20.5581 9.28658 19.9563 9.24002 19.0904L9.16371 17.6709H7.74219H3.94824H2.44824V19.1709C2.44824 20.7957 2.928 22.3094 3.85323 23.6807L3.85906 23.6894L3.86502 23.698C4.8124 25.0609 6.10473 26.1005 7.68955 26.8295C9.28574 27.5638 11.0782 27.9102 13.0332 27.9102C15.7968 27.9102 18.1965 27.2581 20.1061 25.826L20.1061 25.826L20.1126 25.821C22.0706 24.3357 23.085 22.3016 23.085 19.8477C23.085 18.4146 22.7368 17.099 21.9606 15.9845C21.2178 14.8848 20.1234 14.0253 18.79 13.3586C17.4664 12.6967 15.8004 12.1578 13.8325 11.7188C11.9577 11.2976 10.8815 10.8974 10.3978 10.5871C10.1353 10.4186 10.001 10.2227 10.001 9.77832C10.001 9.28011 10.169 8.92957 10.5865 8.60731C11.0158 8.27594 11.7303 8.01758 12.9102 8.01758C13.9525 8.01758 14.6949 8.30201 15.2548 8.78314L15.2547 8.78317L15.2635 8.79059C15.8609 9.29607 16.0654 9.79057 16.0654 10.332V11.832H17.5654H21.3799H22.8799V10.332C22.8799 7.85817 21.8917 5.77517 19.9793 4.19424C18.0916 2.62225 15.6886 1.90039 12.9102 1.90039C10.2446 1.90039 7.92032 2.60673 6.05686 4.12388L6.05685 4.12387L6.0518 4.12802C4.20914 5.64163 3.20703 7.59018 3.20703 9.90137C3.20703 11.2488 3.53932 12.4936 4.26207 13.5684L4.267 13.5758L4.27202 13.583C4.99644 14.6335 6.04879 15.4636 7.32498 16.1173L7.32497 16.1173L7.33153 16.1206C8.62545 16.7754 10.2876 17.3012 12.2677 17.7255L12.2699 17.7259C14.1634 18.1288 15.2338 18.5691 15.7221 18.9354Z"
                            stroke="white" stroke-width="1" id="stSix" class="thePaths" />
                    </svg>
                    <svg style={{width:'38', height:'29'}} viewBox="0 0 38 29" fill="none" xmlns="http://www.w3.org/2000/svg"
                        class="fillanimation">
                        <path
                            d="M8.91498 3.19186L8.87825 2.31055H7.43945H3.85059H2.35059V3.81055V26V27.5H3.85059H7.64453H9.14453V26V10.1294C9.48289 9.45345 9.9085 8.99471 10.4009 8.68823C10.9627 8.33848 11.7197 8.12012 12.751 8.12012C14.0906 8.12012 14.8217 8.46015 15.232 8.87932C15.6481 9.30444 15.9883 10.0699 15.9883 11.46V26V27.5H17.4883H21.3027H22.8027V26V11.359C22.9298 10.2892 23.3249 9.546 23.9245 9.00817L23.9245 9.00821L23.9335 9.00004C24.5533 8.43492 25.3473 8.12012 26.4297 8.12012C27.9609 8.12012 28.6631 8.48251 28.9728 8.82143L28.9727 8.82147L28.9816 8.83099C29.3463 9.22325 29.667 9.96832 29.667 11.3574V26V27.5H31.167H34.9609H36.4609V26V11.1318V11.1199L36.4607 11.108C36.4164 8.3184 35.7215 5.95653 34.1254 4.29433C32.5146 2.61676 30.2265 1.90039 27.5371 1.90039C25.718 1.90039 24.058 2.27164 22.6084 3.0714L22.6084 3.07138L22.602 3.07497C21.8783 3.47887 21.2208 3.95298 20.6326 4.49682C20.1063 3.89452 19.4866 3.38736 18.7729 2.98546C17.4376 2.23355 15.8639 1.90039 14.125 1.90039C12.1758 1.90039 10.426 2.32643 8.91498 3.19186Z"
                            stroke="white" stroke-width="1" id="stSeven" class="thePaths" />
                    </svg>
                    <svg style={{width:'28', height:'30'}} viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg"
                        class="fillanimation">
                        <path
                            d="M3.79395 8.16838L3.79392 8.16836L3.78975 8.17691C2.83016 10.1425 2.36621 12.327 2.36621 14.7002V14.9668C2.36621 18.6909 3.37769 21.843 5.53415 24.269L5.53779 24.2731C7.71745 26.7073 10.5764 27.9102 13.9766 27.9102C16.222 27.9102 18.2661 27.3686 20.0598 26.2483C21.8571 25.1343 23.2286 23.5803 24.1668 21.6267C25.1106 19.6761 25.5664 17.5076 25.5664 15.1514V14.8848C25.5664 11.1352 24.549 7.96741 22.3763 5.53973C20.208 3.1013 17.3462 1.90039 13.9355 1.90039C11.7277 1.90039 9.70755 2.43662 7.91927 3.53833L7.91927 3.53832L7.91415 3.5415C6.13976 4.6445 4.7683 6.2042 3.79395 8.16838ZM17.3332 9.69911L17.3377 9.70514L17.3424 9.71112C18.2506 10.8865 18.7725 12.5045 18.7725 14.7002C18.7725 17.2316 18.2424 18.9899 17.3709 20.1568C16.5275 21.2731 15.4454 21.8135 13.9766 21.8135C12.5198 21.8135 11.4319 21.2779 10.5736 20.166C9.69383 19.0087 9.18066 17.3849 9.18066 15.1514C9.18066 12.5562 9.7213 10.7977 10.5914 9.66855C11.4574 8.54488 12.5302 8.01758 13.9355 8.01758C15.3829 8.01758 16.4702 8.55873 17.3332 9.69911Z"
                            stroke="white" stroke-width="1" id="stEight" class="thePaths" />
                    </svg>
                    <svg style={{width:'18', height:'29'}} viewBox="0 0 18 29" fill="none" xmlns="http://www.w3.org/2000/svg"
                        class="fillanimation">
                        <path
                            d="M14.3501 8.69443L16.0967 8.98553V7.21484V3.6875V2.76045L15.2675 2.34586C14.5765 2.00036 13.7403 1.90039 12.915 1.90039C11.463 1.90039 10.1649 2.23831 9.04098 2.89581L9.02693 2.31055H7.5625H3.87109H2.37109V3.81055V26V27.5H3.87109H7.66504H9.16504V26V10.5717C9.49334 9.89647 9.91068 9.44057 10.3952 9.13652C10.9476 8.78985 11.6986 8.57129 12.7305 8.57129C13.3298 8.57129 13.8684 8.61416 14.3501 8.69443Z"
                            stroke="white" stroke-width="1" id="stNine" class="thePaths" />
                    </svg>
                    <svg style={{width:'27', height:'30'}} viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg"
                        class="fillanimation">
                        <path
                            d="M5.65073 24.4911L5.65432 24.4949C7.85464 26.7909 10.709 27.9102 14.0791 27.9102C18.2505 27.9102 21.5388 26.2688 23.7035 22.9421L24.4551 21.7872L23.3679 20.9406L21.0505 19.1359L19.8626 18.2108L18.942 19.4022C18.3548 20.162 17.6836 20.7558 16.9279 21.2003C16.2785 21.5823 15.4208 21.8135 14.2842 21.8135C12.8026 21.8135 11.6523 21.3088 10.7186 20.295C10.0604 19.5606 9.59649 18.6422 9.36525 17.4922H22.7334H24.2334V15.9922V14.4131C24.2334 10.6665 23.3887 7.55075 21.4816 5.28503C19.5495 2.98963 16.8553 1.90039 13.6074 1.90039C11.5468 1.90039 9.62436 2.48043 7.87071 3.61757C6.11954 4.74824 4.76773 6.31817 3.81025 8.27945L3.81025 8.27944L3.8081 8.28388C2.86165 10.2388 2.40723 12.4297 2.40723 14.8232V15.5205C2.40723 19.1288 3.44515 22.1737 5.65073 24.4911ZM10.8458 9.22558L10.8459 9.2256L10.8521 9.21887C11.6067 8.40466 12.4929 8.01758 13.6074 8.01758C14.8185 8.01758 15.6418 8.40498 16.2502 9.10289L16.2502 9.10291L16.2565 9.1101C16.7162 9.6306 17.0793 10.3623 17.2823 11.375H9.66083C9.94552 10.4537 10.3523 9.75156 10.8458 9.22558Z"
                            stroke="white" stroke-width="1" id="stTen" class="thePaths" />
                    </svg>

                </div>

            </div>
        </div>
    </div> 

            </React.Fragment>
    );
  }
}

export default Animation;