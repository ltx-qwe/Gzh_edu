// 定义不同页面的数据
const contentData = {
    1: [
        { text: "寻找方案义斋", date: "2021/05/05" },
        { text: "北大首开大学男女同校之先河", date: "2021/04/15" },
        { text: "从学生社团到音乐教育机构", date: "2021/04/05" },
        { text: "北京大学马克思主义学院研究生——中国最早学习和研究马克思主义的团体", date: "2021/01/01" },
        { text: "五四运动的预演", date: "2020/12/25" }
    ],
    2: [
        { text: "第二页内容 - 信息1", date: "2022/01/01" },
        { text: "第二页内容 - 信息2", date: "2022/02/02" },
        { text: "第二页内容 - 信息3", date: "2022/03/03" }
    ],
    3: [
        { text: "第三页内容 - 信息1", date: "2023/01/01" },
        { text: "第三页内容 - 信息2", date: "2023/02/02" },
        { text: "第三页内容 - 信息3", date: "2023/03/03" }
    ],
    // 可以继续添加更多页面的数据
};

// 动态更新页面内容
function changePage(pageNumber) {
    const contentContainer = document.getElementById('content');
    const data = contentData[pageNumber];

    // 清空当前内容
    contentContainer.innerHTML = '';

    // 添加新的内容
    data.forEach(item => {
        const infoItem = document.createElement('div');
        infoItem.className = 'info-item';

        const infoText = document.createElement('div');
        infoText.className = 'info-text';
        infoText.textContent = item.text;

        const infoDate = document.createElement('div');
        infoDate.className = 'info-date';
        infoDate.textContent = item.date;

        infoItem.appendChild(infoText);
        infoItem.appendChild(infoDate);
        contentContainer.appendChild(infoItem);
    });

    // 重新添加分页按钮
    const pagination = document.createElement('div');
    pagination.className = 'pagination';
    pagination.innerHTML = `
        <a href="#" onclick="changePage(1)" ${pageNumber === 1 ? 'class="active"' : ''}>1</a>
        <a href="#" onclick="changePage(2)" ${pageNumber === 2 ? 'class="active"' : ''}>2</a>
        <a href="#" onclick="changePage(3)" ${pageNumber === 3 ? 'class="active"' : ''}>3</a>
        <a href="#" onclick="changePage(4)" ${pageNumber === 4 ? 'class="active"' : ''}>4</a>
        <a href="#" onclick="changePage(5)" ${pageNumber === 5 ? 'class="active"' : ''}>5</a>
        <a href="#">...</a>
        <a href="#" onclick="changePage(7)" ${pageNumber === 7 ? 'class="active"' : ''}>7</a>
        <a href="#" onclick="nextPage()">&gt;</a>
        <a href="#" onclick="goPage()">GO</a>
    `;
    contentContainer.appendChild(pagination);
}

// 下一页功能
function nextPage() {
    const currentPage = document.querySelector('.pagination a.active').textContent;
    const nextPage = parseInt(currentPage) + 1;

    if (contentData[nextPage]) {
        changePage(nextPage);
    }
}

// 跳转到指定页面功能
function goPage() {
    const pageNumber = prompt("请输入要跳转的页码：");
    if (pageNumber && contentData[pageNumber]) {
        changePage(pageNumber);
    } else {
        alert("页码无效！");
    }
}

// 初始化页面
document.addEventListener('DOMContentLoaded', function() {
    // 默认加载第一页
    changePage(1);
});