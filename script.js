// 移动端显示/隐藏功能
function showMobileApp(type) {
    const mobileApp = document.getElementById('mobile-app');
    mobileApp.classList.remove('hidden');
    
    // 根据类型更新移动端内容
    updateMobileContent(type);
}

function hideMobileApp() {
    const mobileApp = document.getElementById('mobile-app');
    mobileApp.classList.add('hidden');
}

function updateMobileContent(type) {
    const approvalList = document.querySelector('.mobile-approval-list');
    
    if (type === 'temporary-work') {
        approvalList.innerHTML = `
            <div class="mobile-approval-item">
                <div class="approval-icon">
                    <i class="fas fa-users"></i>
                </div>
                <div class="approval-info">
                    <div class="approval-title">临时用工申请 (来自云农谷)</div>
                    <div class="approval-subtitle">申请人：双坤</div>
                    <div class="approval-time">2025-10-27 14:25</div>
                </div>
                <div class="approval-status pending">待处理</div>
            </div>
            
            <div class="mobile-approval-item">
                <div class="approval-icon">
                    <i class="fas fa-users"></i>
                </div>
                <div class="approval-info">
                    <div class="approval-title">临时用工申请 (来自云农谷)</div>
                    <div class="approval-subtitle">申请人：双坤</div>
                    <div class="approval-time">2025-10-27 13:45</div>
                </div>
                <div class="approval-status pending">待处理</div>
            </div>
        `;
    } else if (type === 'input-application') {
        approvalList.innerHTML = `
            <div class="mobile-approval-item">
                <div class="approval-icon">
                    <i class="fas fa-seedling"></i>
                </div>
                <div class="approval-info">
                    <div class="approval-title">投入品申请 (来自云农谷)</div>
                    <div class="approval-subtitle">申请人：双坤</div>
                    <div class="approval-time">2025-10-27 14:30</div>
                </div>
                <div class="approval-status pending">待处理</div>
            </div>
            
            <div class="mobile-approval-item">
                <div class="approval-icon">
                    <i class="fas fa-seedling"></i>
                </div>
                <div class="approval-info">
                    <div class="approval-title">投入品申请 (来自云农谷)</div>
                    <div class="approval-subtitle">申请人：双坤</div>
                    <div class="approval-time">2025-10-27 12:15</div>
                </div>
                <div class="approval-status pending">待处理</div>
            </div>
        `;
    }
}

// 移动端显示/隐藏功能
function showMobileApp(type) {
    const mobileApp = document.getElementById('mobile-app');
    mobileApp.classList.remove('hidden');
    
    // 根据类型更新移动端内容
    updateMobileContent(type);
}

function hideMobileApp() {
    const mobileApp = document.getElementById('mobile-app');
    mobileApp.classList.add('hidden');
}

// 页面加载完成后的初始化
document.addEventListener('DOMContentLoaded', function() {
    // 添加一些交互效果
    addInteractiveEffects();
    
    // 模拟数据加载
    simulateDataLoading();
    
    // 为导航项添加工具提示
    addTooltips();
    
    // 自动展开数智平台菜单和审批子菜单，并显示审批页面
    const shuzhiCard = document.querySelector('.product-card');
    if (shuzhiCard) {
        shuzhiCard.classList.add('expanded');
    }
    
    // 自动展开审批子菜单
    const approvalSubmenu = document.getElementById('approval-submenu');
    const approvalMenuItem = document.querySelector('.submenu-item.has-children');
    if (approvalSubmenu && approvalMenuItem) {
        approvalSubmenu.classList.add('expanded');
        approvalMenuItem.classList.add('expanded');
    }
    
    showApprovalPage();
});

// 添加工具提示
function addTooltips() {
    const productCards = document.querySelectorAll('.product-card');
    const tooltips = [
        '数智平台 - PC端管理系统',
        '云农谷APP - 移动端应用',
        '企业微信 - 移动审批',
        '小程序 - 轻量级应用'
    ];
    
    productCards.forEach((card, index) => {
        card.setAttribute('data-tooltip', tooltips[index]);
    });
}

function addInteractiveEffects() {
    // 为审批卡片添加点击效果
    const approvalCards = document.querySelectorAll('.approval-card');
    approvalCards.forEach(card => {
        card.addEventListener('click', function() {
            // 添加点击动画
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
    
    // 为场景按钮添加点击效果
    const scenarioButtons = document.querySelectorAll('.scenario-btn');
    scenarioButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
    
    // 为审批项目添加点击效果
    const approvalItems = document.querySelectorAll('.approval-item');
    approvalItems.forEach(item => {
        item.addEventListener('click', function() {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
}

function simulateDataLoading() {
    // 模拟加载动画
    const cards = document.querySelectorAll('.approval-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
    
    // 模拟审批项目加载
    const items = document.querySelectorAll('.approval-item');
    items.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        
        setTimeout(() => {
            item.style.transition = 'all 0.3s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, 500 + index * 50);
    });
}

// 键盘事件处理
document.addEventListener('keydown', function(e) {
    // ESC键关闭移动端
    if (e.key === 'Escape') {
        hideMobileApp();
    }
});

// 点击外部关闭移动端
document.addEventListener('click', function(e) {
    const mobileApp = document.getElementById('mobile-app');
    const phoneFrame = document.querySelector('.phone-frame');
    
    if (!mobileApp.classList.contains('hidden') && 
        !phoneFrame.contains(e.target) && 
        !e.target.closest('.yunnonggu-item')) {
        hideMobileApp();
    }
});

// 添加一些演示用的动画效果
function addDemoAnimations() {
    // 为云农谷卡片添加特殊动画
    const yunnongguItems = document.querySelectorAll('.yunnonggu-item');
    yunnongguItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// 侧边栏折叠功能
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('collapsed');
    
    // 保存折叠状态到本地存储
    const isCollapsed = sidebar.classList.contains('collapsed');
    localStorage.setItem('sidebarCollapsed', isCollapsed);
}

// 产品形态菜单切换功能
function toggleProductMenu(productType) {
    const submenu = document.getElementById(productType + '-submenu');
    const card = event.target.closest('.product-card');
    
    // 关闭其他所有展开的菜单
    const allCards = document.querySelectorAll('.product-card');
    allCards.forEach(c => {
        if (c !== card) {
            c.classList.remove('expanded');
        }
    });
    
    // 切换当前菜单
    card.classList.toggle('expanded');
}

// 三级菜单展开/收起功能
function toggleSubSubmenu(submenuId, event) {
    event.stopPropagation();
    
    const submenu = document.getElementById(submenuId);
    const menuItem = event.target.closest('.submenu-item');
    
    // 切换展开状态
    menuItem.classList.toggle('expanded');
    submenu.classList.toggle('expanded');
}

// 页面切换功能
function showPage(pageType, event) {
    event.stopPropagation(); // 阻止事件冒泡，防止触发父级 product-card 的点击事件
    
    // 移除所有子菜单项的active状态
    const submenuItems = document.querySelectorAll('.submenu-item');
    submenuItems.forEach(item => {
        if (!item.classList.contains('has-children')) {
            item.classList.remove('active');
        }
    });
    
    // 移除所有三级菜单项的active状态
    const subSubmenuItems = document.querySelectorAll('.sub-submenu-item');
    subSubmenuItems.forEach(item => item.classList.remove('active'));
    
    // 添加当前点击项的active状态
    const clickedItem = event.target.closest('.submenu-item, .sub-submenu-item');
    if (clickedItem) {
        clickedItem.classList.add('active');
        
        // 如果是三级菜单项，确保父级菜单保持展开状态
        if (clickedItem.classList.contains('sub-submenu-item')) {
            const parentSubmenu = clickedItem.closest('.submenu-item.has-children');
            if (parentSubmenu) {
                parentSubmenu.classList.add('active');
            }
        }
    }
    
    // 根据页面类型显示不同内容
    switch(pageType) {
        case 'procurement':
            showProcurementPage();
            break;
        case 'payment':
            showPaymentPage();
            break;
        case 'approval':
            showApprovalPage();
            break;
        case 'approval-detail':
            showApprovalDetailPage();
            break;
        case 'input-approval':
            showInputApprovalPage();
            break;
        case 'work-approval':
            showWorkApprovalPage();
            break;
        case 'wechat-approval':
            showWechatApprovalPage();
            break;
        case 'wechat-notification':
            showWechatNotificationPage();
            break;
        case 'miniprogram-demo':
            showMiniprogramDemoPage();
            break;
        default:
            showDefaultPage();
    }
}

// 显示审批详情页面（模拟数据回显）
function showApprovalDetailPage() {
    const contentArea = document.querySelector('.content-area');
    contentArea.innerHTML = `
        <div class="page-content">
            <div class="page-header">
                <h1>审批详情</h1>
                <p class="page-subtitle">查看审批单据的完整信息</p>
            </div>

            <div class="approval-detail-container">
                <div class="detail-header">
                    <h2>云农谷 · 柘城示范基地项目 - 采购申请</h2>
                    <div class="detail-status">
                        <i class="fas fa-check-circle"></i> 审批通过
                    </div>
                </div>

                <div class="detail-body">
                    <!-- 基本信息 -->
                    <div class="detail-section">
                        <h3>
                            <i class="fas fa-info-circle"></i>
                            基本信息
                        </h3>
                        <div class="detail-row">
                            <div class="detail-field">
                                <div class="detail-label">项目名称</div>
                                <div class="detail-value">云农谷 · 柘城示范基地项目</div>
                            </div>
                            <div class="detail-field">
                                <div class="detail-label">销售合同名称</div>
                                <div class="detail-value">柘城基地农业技术服务合同-2025</div>
                            </div>
                        </div>
                        <div class="detail-row">
                            <div class="detail-field">
                                <div class="detail-label">申请人</div>
                                <div class="detail-value">张三</div>
                            </div>
                            <div class="detail-field">
                                <div class="detail-label">申请部门</div>
                                <div class="detail-value">市场与设计部</div>
                            </div>
                            <div class="detail-field">
                                <div class="detail-label">采购类型</div>
                                <div class="detail-value">物资</div>
                            </div>
                            <div class="detail-field">
                                <div class="detail-label">联系人</div>
                                <div class="detail-value">王成龙</div>
                            </div>
                        </div>
                        <div class="detail-row">
                            <div class="detail-field">
                                <div class="detail-label">申请时间</div>
                                <div class="detail-value">2025-10-28 14:30:00</div>
                            </div>
                            <div class="detail-field">
                                <div class="detail-label">审批编号</div>
                                <div class="detail-value">SPCG-2025102800123</div>
                            </div>
                        </div>
                        <div class="detail-row">
                            <div class="detail-field" style="grid-column: 1 / -1;">
                                <div class="detail-label">情况说明（用途）</div>
                                <div class="detail-value">
                                    根据柘城示范基地2025年春季小麦和玉米种植计划，需要采购化肥、农药等农资物品，
                                    用于"小麦-播种期施肥"和"玉米-中期追肥"等农事活动。
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 种植计划与农事活动关联（模拟数据回显） -->
                    <div class="detail-section">
                        <h3>
                            <i class="fas fa-seedling"></i>
                            种植计划与农事活动关联
                            <span class="section-badge">云农谷专用</span>
                        </h3>

                        <!-- 种植计划 1 -->
                        <div class="planting-detail-card">
                            <div class="planting-detail-header">
                                <i class="fas fa-leaf"></i>
                                种植计划 1
                            </div>
                            <div class="planting-detail-body">
                                <div class="planting-info">
                                    <div class="planting-name">
                                        <i class="fas fa-map-marker-alt"></i>
                                        柘城基地-小麦种植计划-2025春季
                                    </div>
                                </div>
                                <div class="farming-activities-detail">
                                    <h4>
                                        <i class="fas fa-tasks"></i>
                                        关联的农事活动（3项）
                                    </h4>
                                    <div class="activity-item" onclick="showActivityDetail('act1-1')">
                                        <div class="activity-icon">
                                            <i class="fas fa-check"></i>
                                        </div>
                                        <div class="activity-info">
                                            <div class="activity-title">小麦-整地施基肥</div>
                                            <div class="activity-meta">计划日期：2025-03-01 | 状态：已完成</div>
                                        </div>
                                        <i class="fas fa-chevron-right activity-arrow"></i>
                                    </div>
                                    <div class="activity-item" onclick="showActivityDetail('act1-2')">
                                        <div class="activity-icon">
                                            <i class="fas fa-check"></i>
                                        </div>
                                        <div class="activity-info">
                                            <div class="activity-title">小麦-播种</div>
                                            <div class="activity-meta">计划日期：2025-03-10 | 状态：已完成</div>
                                        </div>
                                        <i class="fas fa-chevron-right activity-arrow"></i>
                                    </div>
                                    <div class="activity-item" onclick="showActivityDetail('act1-3')">
                                        <div class="activity-icon">
                                            <i class="fas fa-spinner"></i>
                                        </div>
                                        <div class="activity-info">
                                            <div class="activity-title">小麦-苗期追肥</div>
                                            <div class="activity-meta">计划日期：2025-04-05 | 状态：进行中</div>
                                        </div>
                                        <i class="fas fa-chevron-right activity-arrow"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- 种植计划 2 -->
                        <div class="planting-detail-card">
                            <div class="planting-detail-header">
                                <i class="fas fa-leaf"></i>
                                种植计划 2
                            </div>
                            <div class="planting-detail-body">
                                <div class="planting-info">
                                    <div class="planting-name">
                                        <i class="fas fa-map-marker-alt"></i>
                                        柘城基地-玉米种植计划-2025夏季
                                    </div>
                                </div>
                                <div class="farming-activities-detail">
                                    <h4>
                                        <i class="fas fa-tasks"></i>
                                        关联的农事活动（2项）
                                    </h4>
                                    <div class="activity-item" onclick="showActivityDetail('act2-1')">
                                        <div class="activity-icon">
                                            <i class="fas fa-clock"></i>
                                        </div>
                                        <div class="activity-info">
                                            <div class="activity-title">玉米-整地翻耕</div>
                                            <div class="activity-meta">计划日期：2025-06-01 | 状态：待开始</div>
                                        </div>
                                        <i class="fas fa-chevron-right activity-arrow"></i>
                                    </div>
                                    <div class="activity-item" onclick="showActivityDetail('act2-3')">
                                        <div class="activity-icon">
                                            <i class="fas fa-clock"></i>
                                        </div>
                                        <div class="activity-info">
                                            <div class="activity-title">玉米-中期追肥</div>
                                            <div class="activity-meta">计划日期：2025-07-15 | 状态：待开始</div>
                                        </div>
                                        <i class="fas fa-chevron-right activity-arrow"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 采购明细 -->
                    <div class="detail-section">
                        <h3>
                            <i class="fas fa-shopping-cart"></i>
                            采购明细
                        </h3>
                        <table class="purchase-detail-table">
                            <thead>
                                <tr>
                                    <th>序号</th>
                                    <th>物品名称</th>
                                    <th>规格型号</th>
                                    <th>数量</th>
                                    <th>单价(元)</th>
                                    <th>小计(元)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>复合肥（氮磷钾）</td>
                                    <td>50kg/袋，15-15-15</td>
                                    <td>200</td>
                                    <td>150.00</td>
                                    <td>30,000.00</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>尿素</td>
                                    <td>50kg/袋，含氮≥46%</td>
                                    <td>100</td>
                                    <td>120.00</td>
                                    <td>12,000.00</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>除草剂</td>
                                    <td>1L/瓶，草甘膦</td>
                                    <td>50</td>
                                    <td>45.00</td>
                                    <td>2,250.00</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>杀虫剂</td>
                                    <td>500ml/瓶，吡虫啉</td>
                                    <td>30</td>
                                    <td>65.00</td>
                                    <td>1,950.00</td>
                                </tr>
                                <tr>
                                    <td colspan="5" style="text-align: right; font-weight: 600;">合计金额：</td>
                                    <td style="color: #ff4d4f; font-weight: 600; font-size: 15px;">46,200.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <!-- 审批流程 -->
                    <div class="detail-section">
                        <h3>
                            <i class="fas fa-route"></i>
                            审批流程
                        </h3>
                        <div class="approval-timeline">
                            <div class="timeline-item">
                                <div class="timeline-icon success">
                                    <i class="fas fa-user"></i>
                                </div>
                                <div class="timeline-content">
                                    <div class="timeline-title">张三 发起申请</div>
                                    <div class="timeline-desc">提交了采购申请单</div>
                                    <div class="timeline-time">2025-10-28 14:30:00</div>
                                </div>
                            </div>

                            <div class="timeline-item">
                                <div class="timeline-icon success">
                                    <i class="fas fa-user-check"></i>
                                </div>
                                <div class="timeline-content">
                                    <div class="timeline-title">王成龙（部门主管）审批通过</div>
                                    <div class="timeline-desc">审批意见：同意采购，物资规格和数量合理</div>
                                    <div class="timeline-time">2025-10-28 15:45:00</div>
                                </div>
                            </div>

                            <div class="timeline-item">
                                <div class="timeline-icon success">
                                    <i class="fas fa-user-shield"></i>
                                </div>
                                <div class="timeline-content">
                                    <div class="timeline-title">李明（财务经理）审批通过</div>
                                    <div class="timeline-desc">审批意见：预算范围内，同意支付</div>
                                    <div class="timeline-time">2025-10-28 16:20:00</div>
                                </div>
                            </div>

                            <div class="timeline-item">
                                <div class="timeline-icon success">
                                    <i class="fas fa-crown"></i>
                                </div>
                                <div class="timeline-content">
                                    <div class="timeline-title">高总（总经理）审批通过</div>
                                    <div class="timeline-desc">审批意见：批准采购，注意采购质量和时效性</div>
                                    <div class="timeline-time">2025-10-29 09:15:00</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 操作按钮 -->
                    <div class="form-actions" style="justify-content: flex-end; border-top: 1px solid #f0f0f0; padding-top: 20px;">
                        <button class="btn btn-secondary" onclick="showApprovalPage()">
                            <i class="fas fa-arrow-left"></i> 返回列表
                        </button>
                        <button class="btn btn-primary" onclick="window.print()">
                            <i class="fas fa-print"></i> 打印
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 显示数智平台审批页面（原有的OA审批页面）
function showApprovalPage() {
    const contentArea = document.querySelector('.content-area');
    contentArea.innerHTML = `
        <div class="page-content">
            <div class="page-header">
                <h1>数智平台 - 审批</h1>
                <p class="page-subtitle">PC端管理系统审批中心</p>
            </div>

            <div class="approval-row">
                <div class="approval-center card-box">
                    <h2>审批中心</h2>
                    <div class="approval-cards">
                    <div class="approval-card">
                        <div class="card-icon">
                            <i class="fas fa-file-alt"></i>
                        </div>
                        <div class="card-content">
                            <div class="card-number">0</div>
                            <div class="card-title">待处理</div>
                        </div>
                    </div>
                    <div class="approval-card">
                        <div class="card-icon">
                            <i class="fas fa-check-circle"></i>
                        </div>
                        <div class="card-content">
                            <div class="card-title">已处理</div>
                        </div>
                    </div>
                    <div class="approval-card">
                        <div class="card-icon">
                            <i class="fas fa-plus-circle"></i>
                        </div>
                        <div class="card-content">
                            <div class="card-title">已发起</div>
                        </div>
                    </div>
                    <div class="approval-card">
                        <div class="card-icon">
                            <i class="fas fa-share"></i>
                        </div>
                        <div class="card-content">
                            <div class="card-title">抄送我的</div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="scenarios-section card-box">
                    <h2>场景</h2>
                    <div class="scenario-buttons">
                        <button class="scenario-btn">交付中心</button>
                        <button class="scenario-btn">采购中心</button>
                        <button class="scenario-btn">业务管理</button>
                        <button class="scenario-btn">智能财务</button>
                    </div>
                </div>
            </div>

            <div class="all-approvals">
                <h2>全部审批</h2>
                
                <div class="approval-category">
                    <h3>常用</h3>
                    <div class="approval-items">
                        <div class="approval-item">
                            <i class="fas fa-file-alt"></i>
                            <span>工作请示</span>
                        </div>
                        <div class="approval-item">
                            <i class="fas fa-file-alt"></i>
                            <span>预算申请</span>
                        </div>
                        <div class="approval-item">
                            <i class="fas fa-file-alt"></i>
                            <span>用印申请</span>
                        </div>
                        <div class="approval-item" onclick="openFlowSelectModal()">
                            <i class="fas fa-file-alt"></i>
                            <span>日常采购</span>
                        </div>
                    </div>
                </div>

                <div class="approval-category">
                    <h3>营销中心</h3>
                    <div class="approval-items">
                        <div class="approval-item">
                            <i class="fas fa-file-alt"></i>
                            <span>招投标</span>
                        </div>
                        <div class="approval-item">
                            <i class="fas fa-file-alt"></i>
                            <span>售前任务</span>
                        </div>
                        <div class="approval-item">
                            <i class="fas fa-file-alt"></i>
                            <span>开票申请</span>
                        </div>
                    </div>
                </div>

                <div class="approval-category">
                    <h3>采购中心</h3>
                    <div class="approval-items">
                        <div class="approval-item">
                            <i class="fas fa-file-alt"></i>
                            <span>付款申请</span>
                        </div>
                    </div>
                </div>

                <div class="approval-category">
                    <h3>交付中心</h3>
                    <div class="approval-items">
                        <div class="approval-item">
                            <i class="fas fa-file-alt"></i>
                            <span>项目验收</span>
                        </div>
                    </div>
                </div>

                <!-- 云农谷卡片 - 新增 -->
                <div class="approval-category yunnonggu-category">
                    <h3>云农谷</h3>
                    <div class="approval-items">
                        <div class="approval-item yunnonggu-item" onclick="showMobileApp('temporary-work')">
                            <i class="fas fa-users"></i>
                            <span>临时用工申请</span>
                        </div>
                        <div class="approval-item yunnonggu-item" onclick="showMobileApp('input-application')">
                            <i class="fas fa-seedling"></i>
                            <span>投入品申请</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 显示企业微信审批页面
function showWechatApprovalPage() {
    const contentArea = document.querySelector('.content-area');
    contentArea.innerHTML = `
        <div class="page-content">
            <div class="page-header">
                <h1>企业微信 - 审批中心</h1>
                <p class="page-subtitle">移动端审批管理</p>
            </div>
            
            <div class="wechat-demo">
                <div class="demo-phone">
                    <div class="phone-header">
                        <div class="phone-title">企业微信</div>
                        <div class="phone-user">王成龙</div>
                    </div>
                    
                    <div class="phone-content">
                        <div class="wechat-nav">
                            <div class="wechat-nav-item active">审批</div>
                            <div class="wechat-nav-item">消息</div>
                        </div>
                        
                        <div class="wechat-approval-list">
                            <div class="wechat-approval-item">
                                <div class="approval-icon">
                                    <i class="fas fa-file-alt"></i>
                                </div>
                                <div class="approval-info">
                                    <div class="approval-title">采购申请</div>
                                    <div class="approval-subtitle">申请人：双坤</div>
                                    <div class="approval-time">2025-10-27 14:30</div>
                                </div>
                                <div class="approval-status pending">待处理</div>
                            </div>
                            
                            <div class="wechat-approval-item">
                                <div class="approval-icon">
                                    <i class="fas fa-seedling"></i>
                                </div>
                                <div class="approval-info">
                                    <div class="approval-title">投入品申请 (来自云农谷)</div>
                                    <div class="approval-subtitle">申请人：双坤</div>
                                    <div class="approval-time">2025-10-27 14:25</div>
                                </div>
                                <div class="approval-status pending">待处理</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 显示企业微信消息通知页面
function showWechatNotificationPage() {
    const contentArea = document.querySelector('.content-area');
    contentArea.innerHTML = `
        <div class="page-content">
            <div class="page-header">
                <h1>企业微信 - 消息通知</h1>
                <p class="page-subtitle">农事活动闭环通知</p>
            </div>
            
            <div class="notification-demo">
                <div class="notification-card">
                    <div class="notification-header">
                        <i class="fas fa-bell"></i>
                        <span>农事活动完成通知</span>
                        <span class="notification-time">2分钟前</span>
                    </div>
                    <div class="notification-content">
                        <p>您审批的 <strong>采购申请单 SKC-123</strong> 所关联的农事活动 <strong>"小麦-播种期施肥"</strong> 已完成。</p>
                        <div class="notification-actions">
                            <button class="btn btn-primary">查看详情</button>
                            <button class="btn btn-secondary">标记已读</button>
                        </div>
                    </div>
                </div>
                
                <div class="notification-card">
                    <div class="notification-header">
                        <i class="fas fa-check-circle"></i>
                        <span>审批完成通知</span>
                        <span class="notification-time">1小时前</span>
                    </div>
                    <div class="notification-content">
                        <p>您的 <strong>临时用工申请</strong> 已审批通过，可以开始执行。</p>
                        <div class="notification-actions">
                            <button class="btn btn-primary">查看详情</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 显示小程序演示页面
function showMiniprogramDemoPage() {
    const contentArea = document.querySelector('.content-area');
    contentArea.innerHTML = `
        <div class="page-content">
            <div class="page-header">
                <h1>小程序 - 移动端演示</h1>
                <p class="page-subtitle">轻量级应用界面</p>
            </div>
            
            <div class="miniprogram-demo">
                <div class="demo-phone miniprogram-phone">
                    <div class="phone-header miniprogram-header">
                        <div class="phone-title">云农谷小程序</div>
                        <div class="phone-user">双坤</div>
                    </div>
                    
                    <div class="phone-content">
                        <div class="miniprogram-nav">
                            <div class="miniprogram-nav-item active">首页</div>
                            <div class="miniprogram-nav-item">申请</div>
                            <div class="miniprogram-nav-item">我的</div>
                        </div>
                        
                        <div class="miniprogram-content">
                            <div class="miniprogram-card">
                                <div class="card-icon">
                                    <i class="fas fa-seedling"></i>
                                </div>
                                <div class="card-content">
                                    <h4>投入品申请</h4>
                                    <p>快速申请农用物资</p>
                                </div>
                            </div>
                            
                            <div class="miniprogram-card">
                                <div class="card-icon">
                                    <i class="fas fa-users"></i>
                                </div>
                                <div class="card-content">
                                    <h4>临时用工</h4>
                                    <p>申请临时工作人员</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 显示采购申请页面
// 显示采购申请页面
function showProcurementPage() {
    const contentArea = document.querySelector('.content-area');
    contentArea.innerHTML = `
        <div class="page-content">
            <div class="page-header">
                <h1>云农谷采购申请</h1>
                <p class="page-subtitle">关联云农谷农事活动等</p>
            </div>
            
            <div class="form-container">
                <div class="form-section">
                    <h3>采购申请表单</h3>
                    <div class="form-group">
                        <label>采购分类</label>
                        <select class="form-control" onchange="toggleFormFields(this.value)">
                            <option value="daily">日常采购</option>
                            <option value="yunnonggu">云农谷投入品采购</option>
                        </select>
                    </div>
                    
                    <div id="daily-fields" class="form-fields">
                        <div class="form-group">
                            <label>关联合同</label>
                            <input type="text" class="form-control" placeholder="请输入合同信息">
                        </div>
                        <div class="form-group">
                            <label>项目名称</label>
                            <input type="text" class="form-control" placeholder="请输入项目名称">
                        </div>
                    </div>
                    
                    <div id="yunnonggu-fields" class="form-fields hidden">
                        <div class="yunnonggu-panel">
                            <h4>云农谷农事关联</h4>
                            <div class="form-group">
                                <label>选择种植计划</label>
                                <select class="form-control" multiple>
                                    <option>柘城基地-小麦种植计划-2025</option>
                                    <option>周口基地-玉米种植计划-2025</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>选择农事活动</label>
                                <div class="checkbox-group">
                                    <label><input type="checkbox"> 小麦-播种期施肥</label>
                                    <label><input type="checkbox"> 小麦-病虫害防治</label>
                                    <label><input type="checkbox"> 玉米-中期追肥</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label>物品明细</label>
                        <textarea class="form-control" rows="3" placeholder="请输入采购物品明细"></textarea>
                    </div>
                    
                    <div class="form-actions">
                        <button class="btn btn-primary" onclick="openFlowSelectModal()">提交申请</button>
                        <button class="btn btn-secondary">保存草稿</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 打开“选择流程”弹窗
function openFlowSelectModal() {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.innerHTML = `
        <div class="modal" role="dialog" aria-modal="true">
            <div class="modal-header">选择流程</div>
            <div class="modal-body">
                <div class="select-list">
                    <div class="select-item">研发采购审批流程</div>
                    <div class="select-item">日常采购</div>
                    <div class="select-item">项目采购审批流程</div>
                    <div class="select-item" onclick="selectYNGProject()">云农谷 · 柘城示范基地项目</div>
                </div>
            </div>
        </div>
    `;
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) document.body.removeChild(overlay);
    });
    document.body.appendChild(overlay);
}

// 选择“云农谷 · 柘城示范基地项目”后进入新页面
function selectYNGProject() {
    const overlay = document.querySelector('.modal-overlay');
    if (overlay) document.body.removeChild(overlay);
    showYNGPurchasePage();
}

// 云农谷示范基地项目页面（参考截图2布局的简化版）
function showYNGPurchasePage() {
    const contentArea = document.querySelector('.content-area');
    contentArea.innerHTML = `
        <div class="page-content">
            <!-- 面包屑导航 -->
            <div class="breadcrumb-nav">
                <span class="breadcrumb-item" onclick="showApprovalPage()">
                    <i class="fas fa-arrow-left"></i> 返回审批
                </span>
                <span class="breadcrumb-separator">/</span>
                <span class="breadcrumb-item">日常采购</span>
                <span class="breadcrumb-separator">/</span>
                <span class="breadcrumb-item active">云农谷 · 柘城示范基地项目</span>
            </div>

            <div class="page-header">
                <h1>云农谷 · 柘城示范基地项目 - 采购申请</h1>
                <p class="page-subtitle">示例表单与审批流程预览</p>
            </div>

            <div class="form-container">
                <div class="form-section">
                    <div class="form-group"><label>项目名称</label><input class="form-control" placeholder="请选择项目" value="云农谷 · 柘城示范基地项目"></div>
                    <div class="form-group"><label>销售合同名称</label><input class="form-control" placeholder="销售合同名称"></div>
                    <div class="form-group"><label>申请人</label><input class="form-control" value="张三"></div>
                    <div class="form-group"><label>申请部门</label><input class="form-control" value="市场与设计部"></div>
                    <div class="form-group"><label>采购类型</label><select class="form-control"><option>硬件</option><option selected>物资</option></select></div>
                    <div class="form-group"><label>联系人</label><input class="form-control" value="王成龙"></div>
                    <div class="form-group"><label>情况说明（用途）</label><textarea class="form-control" rows="3" placeholder="请输入说明"></textarea></div>
                </div>

                <!-- 种植计划与农事活动关联卡片 -->
                <div class="form-section">
                    <h3>
                        <i class="fas fa-seedling"></i> 种植计划与农事活动关联
                        <span class="section-badge">云农谷专用</span>
                        <span class="optional-badge">选填</span>
                    </h3>
                    <p class="section-hint">
                        <i class="fas fa-info-circle"></i>
                        如果采购与种植计划相关，请添加种植计划并选择对应的农事活动
                    </p>
                    <div id="planting-plans-container">
                        <!-- 默认不显示卡片，由用户主动添加 -->
                    </div>
                    <div class="add-plan-button-wrapper">
                        <button class="btn btn-add-plan" onclick="addPlantingPlan()">
                            <i class="fas fa-plus-circle"></i> 添加种植计划
                        </button>
                    </div>
                </div>

                <div class="form-section">
                    <h3>采购明细</h3>
                    <div class="toolbar">
                        <button class="btn btn-secondary" onclick="addDetailRow()">
                            <i class="fas fa-plus"></i> 添加采购事项
                        </button>
                    </div>
                    <div class="table-box">
                        <table class="table" id="detailTable">
                            <thead>
                                <tr>
                                    <th>序号</th>
                                    <th>物品名称</th>
                                    <th>规格型号</th>
                                    <th>数量</th>
                                    <th>单价(元)</th>
                                    <th>小计(元)</th>
                                    <th>操作</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td><input class="form-control" placeholder="如：化肥"></td>
                                    <td><input class="form-control" placeholder="规格"></td>
                                    <td><input class="form-control" type="number" value="1"></td>
                                    <td><input class="form-control" type="number" value="0"></td>
                                    <td><input class="form-control" type="number" value="0"></td>
                                    <td><button class="btn btn-secondary btn-sm" onclick="removeDetailRow(this)"><i class="fas fa-trash"></i></button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="form-section">
                    <h3>抄送人</h3>
                    <div class="form-actions"><button class="btn btn-secondary">
                        <i class="fas fa-user-plus"></i> 选择抄送人
                    </button></div>
                </div>

                <div class="form-section">
                    <h3>流程图</h3>
                    <div style="height:180px;border:1px dashed #d9d9d9;border-radius:8px;display:flex;align-items:center;justify-content:center;color:#999;">
                        <i class="fas fa-project-diagram" style="font-size:48px;margin-right:15px;"></i>
                        BPMN 流程图（示意占位）
                    </div>
                </div>

                <div class="form-actions" style="justify-content:flex-end;">
                    <button class="btn btn-primary">
                        <i class="fas fa-check"></i> 确定
                    </button>
                    <button class="btn btn-secondary" onclick="showApprovalPage()">
                        <i class="fas fa-times"></i> 取消
                    </button>
                </div>
            </div>
        </div>
    `;
}

// 农事活动数据（模拟数据）
const farmingActivitiesData = {
    'plan1': [
        { id: 'act1-1', name: '小麦-整地施基肥', date: '2025-03-01' },
        { id: 'act1-2', name: '小麦-播种', date: '2025-03-10' },
        { id: 'act1-3', name: '小麦-苗期追肥', date: '2025-04-05' },
        { id: 'act1-4', name: '小麦-病虫害防治', date: '2025-04-20' },
        { id: 'act1-5', name: '小麦-灌溉管理', date: '2025-05-01' }
    ],
    'plan2': [
        { id: 'act2-1', name: '玉米-整地翻耕', date: '2025-06-01' },
        { id: 'act2-2', name: '玉米-播种覆膜', date: '2025-06-10' },
        { id: 'act2-3', name: '玉米-中期追肥', date: '2025-07-15' },
        { id: 'act2-4', name: '玉米-病虫害防治', date: '2025-07-25' }
    ],
    'plan3': [
        { id: 'act3-1', name: '大豆-整地备耕', date: '2025-09-01' },
        { id: 'act3-2', name: '大豆-播种', date: '2025-09-10' },
        { id: 'act3-3', name: '大豆-中耕除草', date: '2025-10-05' }
    ],
    'plan4': [
        { id: 'act4-1', name: '小麦-整地施基肥', date: '2025-03-05' },
        { id: 'act4-2', name: '小麦-播种', date: '2025-03-15' },
        { id: 'act4-3', name: '小麦-苗期管理', date: '2025-04-10' }
    ]
};

// 农事活动详细信息数据（模拟数据）
const activityDetailsData = {
    'act1-1': {
        name: '小麦-整地施基肥',
        planTime: '2025-03-01 至 2025-03-01',
        status: '已完成',
        statusClass: 'completed',
        base: '柘城基地（1号地块）',
        plan: '柘城基地-小麦种植计划-2025春季',
        responsible: '张三',
        startTime: '2025-03-01 08:00',
        endTime: '2025-03-01 18:00',
        note: '使用复合肥（15-15-15），每亩施肥40公斤',
        source: '自行添加',
        creator: '张三',
        createTime: '2025-02-25 14:30',
        images: [
            { url: 'https://via.placeholder.com/300x200/4CAF50/FFFFFF?text=整地施肥1', time: '2025-03-01 09:15' },
            { url: 'https://via.placeholder.com/300x200/4CAF50/FFFFFF?text=整地施肥2', time: '2025-03-01 14:30' }
        ],
        description: '对1号地块进行深耕翻地，深度25-30cm，同时均匀施入基肥。注意避开雨天作业，确保土壤墒情适宜。'
    },
    'act1-2': {
        name: '小麦-播种',
        planTime: '2025-03-10 至 2025-03-10',
        status: '已完成',
        statusClass: 'completed',
        base: '柘城基地（1号地块）',
        plan: '柘城基地-小麦种植计划-2025春季',
        responsible: '李四',
        startTime: '2025-03-10 07:00',
        endTime: '2025-03-10 17:30',
        note: '使用郑麦366品种，播种量22kg/亩',
        source: '自行添加',
        creator: '张三',
        createTime: '2025-03-01 10:00',
        images: [
            { url: 'https://via.placeholder.com/300x200/2196F3/FFFFFF?text=播种作业1', time: '2025-03-10 10:20' },
            { url: 'https://via.placeholder.com/300x200/2196F3/FFFFFF?text=播种作业2', time: '2025-03-10 15:45' }
        ],
        description: '采用机械条播方式，行距20cm，播深3-5cm。播后及时镇压，确保种子与土壤紧密接触。'
    },
    'act1-3': {
        name: '小麦-苗期追肥',
        planTime: '2025-04-05 至 2025-04-05',
        status: '进行中',
        statusClass: 'in-progress',
        base: '柘城基地（1号地块）',
        plan: '柘城基地-小麦种植计划-2025春季',
        responsible: '王五',
        startTime: '2025-04-05 08:00',
        endTime: '2025-04-05 16:00',
        note: '使用尿素，每亩施用15公斤',
        source: '自行添加',
        creator: '张三',
        createTime: '2025-03-15 09:20',
        images: [],
        description: '小麦进入返青拔节期，需要追施氮肥促进分蘖和茎秆生长。选择晴天进行，追肥后适当浇水。'
    },
    'act2-1': {
        name: '玉米-整地翻耕',
        planTime: '2025-06-01 至 2025-06-01',
        status: '待开始',
        statusClass: 'pending',
        base: '柘城基地（2号地块）',
        plan: '柘城基地-玉米种植计划-2025夏季',
        responsible: '赵六',
        startTime: '2025-06-01 07:00',
        endTime: '2025-06-01 18:00',
        note: '前茬作物为小麦，需彻底清理秸秆',
        source: '自行添加',
        creator: '张三',
        createTime: '2025-05-10 11:30',
        images: [],
        description: '对2号地块进行深松整地，打破犁底层，改善土壤结构。结合整地施入有机肥和复合肥。'
    },
    'act2-3': {
        name: '玉米-中期追肥',
        planTime: '2025-07-15 至 2025-07-15',
        status: '待开始',
        statusClass: 'pending',
        base: '柘城基地（2号地块）',
        plan: '柘城基地-玉米种植计划-2025夏季',
        responsible: '孙七',
        startTime: '2025-07-15 08:00',
        endTime: '2025-07-15 17:00',
        note: '大喇叭口期追肥，促进穗部发育',
        source: '自行添加',
        creator: '张三',
        createTime: '2025-06-20 14:00',
        images: [],
        description: '玉米进入大喇叭口期，是需肥高峰期。追施尿素25kg/亩，可采用沟施或穴施方式，追肥后浇水。'
    }
};

let plantingPlanCount = 0;

// 显示农事活动详情弹窗
function showActivityDetail(activityId) {
    const activity = activityDetailsData[activityId];
    if (!activity) {
        console.error('农事活动数据不存在:', activityId);
        return;
    }

    // 状态样式映射
    const statusStyles = {
        'completed': { class: 'status-completed', text: '已完成' },
        'in-progress': { class: 'status-in-progress', text: '进行中' },
        'pending': { class: 'status-pending', text: '待开始' }
    };

    const statusStyle = statusStyles[activity.statusClass] || statusStyles['pending'];

    // 生成照片HTML
    const imagesHtml = activity.images.length > 0 
        ? activity.images.map((img, index) => `
            <div class="activity-photo">
                <img src="${img.url}" alt="农事照片${index + 1}">
                <div class="photo-time">${img.time}</div>
            </div>
        `).join('')
        : '<div class="no-photos"><i class="fas fa-image"></i><p>暂无照片</p></div>';

    // 创建弹窗
    const modal = document.createElement('div');
    modal.className = 'activity-modal-overlay';
    modal.innerHTML = `
        <div class="activity-modal">
            <div class="activity-modal-header">
                <h2>${activity.name}</h2>
                <button class="modal-close-btn" onclick="closeActivityModal()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="activity-modal-body">
                <!-- 状态标签 -->
                <div class="activity-status-badge ${statusStyle.class}">
                    ${statusStyle.text}
                </div>

                <!-- 基本信息 -->
                <div class="activity-detail-section">
                    <div class="detail-item">
                        <div class="detail-item-label">计划时间</div>
                        <div class="detail-item-value">${activity.planTime}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-item-label">基地/地块</div>
                        <div class="detail-item-value">${activity.base}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-item-label">种植计划</div>
                        <div class="detail-item-value">${activity.plan}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-item-label">负责人</div>
                        <div class="detail-item-value">${activity.responsible}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-item-label">开始时间</div>
                        <div class="detail-item-value">${activity.startTime}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-item-label">结束时间</div>
                        <div class="detail-item-value">${activity.endTime}</div>
                    </div>
                    <div class="detail-item full-width">
                        <div class="detail-item-label">备注</div>
                        <div class="detail-item-value">${activity.note}</div>
                    </div>
                </div>

                <!-- 来源信息 -->
                <div class="activity-detail-section">
                    <div class="detail-item">
                        <div class="detail-item-label">来源</div>
                        <div class="detail-item-value">${activity.source}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-item-label">创建人</div>
                        <div class="detail-item-value">${activity.creator}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-item-label">创建时间</div>
                        <div class="detail-item-value">${activity.createTime}</div>
                    </div>
                </div>

                <!-- 农事照片 -->
                <div class="activity-detail-section">
                    <div class="section-title">
                        <i class="fas fa-image"></i>
                        农事照片
                    </div>
                    <div class="activity-photos">
                        ${imagesHtml}
                    </div>
                </div>

                <!-- 农事活动描述 -->
                <div class="activity-detail-section">
                    <div class="section-title">
                        <i class="fas fa-align-left"></i>
                        农事活动描述
                    </div>
                    <div class="activity-description">
                        ${activity.description}
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // 添加动画
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
}

// 关闭农事活动详情弹窗
function closeActivityModal() {
    const modal = document.querySelector('.activity-modal-overlay');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.remove();
        }, 300);
    }
}

// 点击弹窗外部关闭
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('activity-modal-overlay')) {
        closeActivityModal();
    }
});

// ESC键关闭弹窗
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeActivityModal();
    }
});

// 添加种植计划卡片
function addPlantingPlan() {
    const container = document.getElementById('planting-plans-container');
    const planIndex = plantingPlanCount++;
    
    const planCard = document.createElement('div');
    planCard.className = 'planting-plan-card';
    planCard.setAttribute('data-plan-index', planIndex);
    planCard.innerHTML = `
        <div class="plan-card-header">
            <div class="plan-card-title">
                <i class="fas fa-leaf"></i> 种植计划 ${planIndex + 1}
            </div>
            <button class="btn-icon btn-remove-plan" onclick="removePlantingPlan(${planIndex})" title="删除此计划">
                <i class="fas fa-times"></i>
            </button>
        </div>
        <div class="plan-card-body">
            <div class="form-group">
                <label>选择种植计划</label>
                <select class="form-control" onchange="loadFarmingActivities(${planIndex}, this.value)">
                    <option value="">请选择种植计划</option>
                    <option value="plan1">柘城基地-小麦种植计划-2025春季</option>
                    <option value="plan2">柘城基地-玉米种植计划-2025夏季</option>
                    <option value="plan3">柘城基地-大豆种植计划-2025秋季</option>
                    <option value="plan4">周口基地-小麦种植计划-2025春季</option>
                </select>
            </div>
            <div class="form-group">
                <label>选择农事活动（可多选）</label>
                <div class="farming-activities-list" id="activities-list-${planIndex}">
                    <div class="empty-hint">
                        <i class="fas fa-info-circle"></i>
                        请先选择种植计划
                    </div>
                </div>
            </div>
        </div>
    `;
    
    container.appendChild(planCard);
    
    // 添加动画效果
    setTimeout(() => {
        planCard.style.opacity = '1';
        planCard.style.transform = 'translateY(0)';
    }, 10);
}

// 删除种植计划卡片
function removePlantingPlan(planIndex) {
    const planCard = document.querySelector(`[data-plan-index="${planIndex}"]`);
    if (planCard) {
        planCard.style.opacity = '0';
        planCard.style.transform = 'translateY(-10px)';
        setTimeout(() => {
            planCard.remove();
        }, 300);
    }
}

// 加载农事活动
function loadFarmingActivities(planIndex, planId) {
    const activitiesList = document.getElementById(`activities-list-${planIndex}`);
    
    if (!planId) {
        activitiesList.innerHTML = `
            <div class="empty-hint">
                <i class="fas fa-info-circle"></i>
                请先选择种植计划
            </div>
        `;
        return;
    }
    
    const activities = farmingActivitiesData[planId] || [];
    
    if (activities.length === 0) {
        activitiesList.innerHTML = `
            <div class="empty-hint">
                <i class="fas fa-exclamation-circle"></i>
                该种植计划暂无农事活动
            </div>
        `;
        return;
    }
    
    activitiesList.innerHTML = activities.map(activity => `
        <div class="activity-checkbox-item">
            <label>
                <input type="checkbox" name="activity-${planIndex}" value="${activity.id}">
                <span class="activity-name">${activity.name}</span>
                <span class="activity-date">${activity.date}</span>
            </label>
        </div>
    `).join('');
}

function addDetailRow() {
    const tbody = document.querySelector('#detailTable tbody');
    const idx = tbody.children.length + 1;
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${idx}</td>
        <td><input class="form-control" placeholder="物品名称"></td>
        <td><input class="form-control" placeholder="规格型号"></td>
        <td><input class="form-control" type="number" value="1"></td>
        <td><input class="form-control" type="number" value="0"></td>
        <td><input class="form-control" type="number" value="0"></td>
        <td><button class="btn btn-secondary" onclick="removeDetailRow(this)">删除</button></td>
    `;
    tbody.appendChild(tr);
}

function removeDetailRow(btn) {
    const tr = btn.closest('tr');
    const tbody = tr.parentElement;
    tbody.removeChild(tr);
    // 重新编号
    [...tbody.children].forEach((row, i) => row.firstElementChild.textContent = i + 1);
}

// 显示请款申请页面
function showPaymentPage() {
    const contentArea = document.querySelector('.content-area');
    contentArea.innerHTML = `
        <div class="page-content">
            <div class="page-header">
                <h1>数智平台-请款申请</h1>
                <p class="page-subtitle">关联云农谷农事活动等</p>
            </div>
            
            <div class="form-container">
                <div class="form-section">
                    <h3>请款申请表单</h3>
                    <div class="form-group">
                        <label>付款类型</label>
                        <select class="form-control" onchange="togglePaymentFields(this.value)">
                            <option value="contract">合同款</option>
                            <option value="daily">日常报销</option>
                            <option value="yunnonggu">云农谷用工请款</option>
                        </select>
                    </div>
                    
                    <div id="yunnonggu-payment-fields" class="form-fields hidden">
                        <div class="yunnonggu-panel">
                            <h4>云农谷农事关联</h4>
                            <div class="form-group">
                                <label>选择种植计划</label>
                                <select class="form-control" multiple>
                                    <option>柘城基地-小麦种植计划-2025</option>
                                    <option>周口基地-玉米种植计划-2025</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>选择农事活动</label>
                                <div class="checkbox-group">
                                    <label><input type="checkbox"> 小麦-播种期施肥</label>
                                    <label><input type="checkbox"> 小麦-病虫害防治</label>
                                    <label><input type="checkbox"> 玉米-中期追肥</label>
                                </div>
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label>用工说明</label>
                            <textarea class="form-control" rows="3" placeholder="请输入用工说明"></textarea>
                        </div>
                        <div class="form-group">
                            <label>用工总金额</label>
                            <input type="number" class="form-control" placeholder="请输入金额">
                        </div>
                    </div>
                    
                    <div class="form-actions">
                        <button class="btn btn-primary">提交申请</button>
                        <button class="btn btn-secondary">保存草稿</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 显示投入品申请审批融合页面
function showInputApprovalPage() {
    const contentArea = document.querySelector('.content-area');
    contentArea.innerHTML = `
        <div class="page-content">
            <div class="page-header">
                <h1>投入品申请审批融合</h1>
                <p class="page-subtitle">云农谷APP → 数智平台审批流程</p>
            </div>
            
            <div class="approval-flow">
                <div class="flow-step">
                    <div class="step-icon">
                        <i class="fas fa-mobile-alt"></i>
                    </div>
                    <div class="step-content">
                        <h4>1. 云农谷APP发起</h4>
                        <p>双坤在云农谷APP发起投入品领用申请</p>
                    </div>
                </div>
                
                <div class="flow-arrow">
                    <i class="fas fa-arrow-right"></i>
                </div>
                
                <div class="flow-step">
                    <div class="step-icon">
                        <i class="fas fa-sync"></i>
                    </div>
                    <div class="step-content">
                        <h4>2. 系统同步</h4>
                        <p>申请自动同步到数智平台审批系统</p>
                    </div>
                </div>
                
                <div class="flow-arrow">
                    <i class="fas fa-arrow-right"></i>
                </div>
                
                <div class="flow-step">
                    <div class="step-icon">
                        <i class="fas fa-check-circle"></i>
                    </div>
                    <div class="step-content">
                        <h4>3. 数智平台审批</h4>
                        <p>高总在数智平台统一审批</p>
                    </div>
                </div>
            </div>
            
            <div class="demo-section">
                <h3>演示操作</h3>
                <button class="btn btn-primary" onclick="showMobileApp('input-application')">
                    查看移动端申请
                </button>
            </div>
        </div>
    `;
}

// 显示临时用工申请审批融合页面
function showWorkApprovalPage() {
    const contentArea = document.querySelector('.content-area');
    contentArea.innerHTML = `
        <div class="page-content">
            <div class="page-header">
                <h1>临时用工申请审批融合</h1>
                <p class="page-subtitle">云农谷APP → 数智平台审批流程</p>
            </div>
            
            <div class="approval-flow">
                <div class="flow-step">
                    <div class="step-icon">
                        <i class="fas fa-mobile-alt"></i>
                    </div>
                    <div class="step-content">
                        <h4>1. 云农谷APP发起</h4>
                        <p>双坤在云农谷APP发起临时用工申请</p>
                    </div>
                </div>
                
                <div class="flow-arrow">
                    <i class="fas fa-arrow-right"></i>
                </div>
                
                <div class="flow-step">
                    <div class="step-icon">
                        <i class="fas fa-sync"></i>
                    </div>
                    <div class="step-content">
                        <h4>2. 系统同步</h4>
                        <p>申请自动同步到数智平台审批系统</p>
                    </div>
                </div>
                
                <div class="flow-arrow">
                    <i class="fas fa-arrow-right"></i>
                </div>
                
                <div class="flow-step">
                    <div class="step-icon">
                        <i class="fas fa-check-circle"></i>
                    </div>
                    <div class="step-content">
                        <h4>3. 数智平台审批</h4>
                        <p>高总在数智平台统一审批</p>
                    </div>
                </div>
            </div>
            
            <div class="demo-section">
                <h3>演示操作</h3>
                <button class="btn btn-primary" onclick="showMobileApp('temporary-work')">
                    查看移动端申请
                </button>
            </div>
        </div>
    `;
}

// 显示默认页面（OA审批）
function showDefaultPage() {
    // 保持原有的OA审批页面内容
}

// 动态表单字段切换
function toggleFormFields(value) {
    const dailyFields = document.getElementById('daily-fields');
    const yunnongguFields = document.getElementById('yunnonggu-fields');
    
    if (value === 'yunnonggu') {
        dailyFields.classList.add('hidden');
        yunnongguFields.classList.remove('hidden');
    } else {
        dailyFields.classList.remove('hidden');
        yunnongguFields.classList.add('hidden');
    }
}

function togglePaymentFields(value) {
    const yunnongguFields = document.getElementById('yunnonggu-payment-fields');
    
    if (value === 'yunnonggu') {
        yunnongguFields.classList.remove('hidden');
    } else {
        yunnongguFields.classList.add('hidden');
    }
}

// 初始化侧边栏状态
function initSidebar() {
    const sidebar = document.getElementById('sidebar');
    const isCollapsed = localStorage.getItem('sidebarCollapsed') === 'true';
    
    if (isCollapsed) {
        sidebar.classList.add('collapsed');
    }
}

// 全屏切换功能
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

// 初始化演示动画
document.addEventListener('DOMContentLoaded', function() {
    addDemoAnimations();
    initSidebar();
});
