//전역변수
const url = `https://open.neis.go.kr/hub/mealServiceDietInfo`
const serviceKey = '111f48f0039644d087e84073ded0515d'

let diet
let diet_arr = []
let dataSet

// childElement를 넣고싶은 부모 태그
const parentElement = document.querySelector('.currentDiet')

//함수
function pushDate() {
    let apiYear = copyYear
    let apiMonth = copyMonth
    let apiDate = copyDate

    if (copyMonth < 10) {
       apiMonth = 0+String(copyMonth)
    }

    if (copyDate < 10) {
       apiDate = 0+String(copyDate)
    }
    
    return `${apiYear}${apiMonth}${apiDate}`
}

//api 요청
async function getAPI() {
    axios({
        url: url, 
        method: 'get',
        params: {
            Key: serviceKey,
            Type: 'json',
            pIndex: 1,
            pSize: 10,
            ATPT_OFCDC_SC_CODE: 'J10',
            SD_SCHUL_CODE: '7531149',   
            MLSV_YMD: pushDate()
        }
    }).then(function (res) {
        dataSet = res.data
        try {
            diet = dataSet.mealServiceDietInfo[1].row[0].DDISH_NM
            diet_arr = diet.split('<br/>')
            for (let i = 0; i < diet_arr.length; i++) { // 이 아래 과정을 급식의 개수만큼 반복    
                // 부모 태그에 넣을 자식 element를 생성 (div태그로)
                let mealInfoElement = document.createElement('div')
        
                // 자식 태그에 diet라는 클래스를 공통으로 넣기 위해서 classList에 add함수를 이용해 diet를 넣음
                mealInfoElement.classList.add('diet')
        
                // 자식 태그에 텍스트를 넣기 위해 diet_arr[i]에 있는 String를 넣음
                mealInfoElement.textContent = diet_arr[i] 
        
                // 부모 태그에 새로 만든 자식 태그를 넣음
                parentElement.append(mealInfoElement)
            }
        } catch (error) {
            console.log("data not found err(식단 정보를 불러올 수 없습니다):: ", error)
            // 부모 태그에 넣을 자식 element를 생성 (div태그로)
            let mealInfoElement = document.createElement('div')
            
            // 자식 태그에 diet라는 클래스를 공통으로 넣기 위해서 classList에 add함수를 이용해 diet를 넣음
            mealInfoElement.classList.add('diet')
    
            // 자식 태그에 텍스트를 넣기 위해 diet_arr[i]에 있는 String를 넣음
            mealInfoElement.textContent = "식단 정보가 없습니다." 
            
            // 부모 태그에 새로 만든 자식 태그를 넣음
            parentElement.append(mealInfoElement)
        }
      })
}
getAPI()

//API 정보를 가져온 후 다른 함수를 통해 for문 처리 => 서버상에서 정보를 처리하는게 아니라 속도 향상을 기대할 수 있음.