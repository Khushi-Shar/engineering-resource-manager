import { Dashboard, FormatShapes, LocationOn, Description, StarsRounded, Pets, RememberMe, TipsAndUpdates, Quiz, CardGiftcard, Sick, EmojiEvents, ReceiptLong ,AccountCircleRounded, School,ManageAccounts, Medication, GTranslate, MenuBook, VideoLibrary, ContactSupport, Handshake, People,  Message} from "@mui/icons-material";

import StyleGuide from "../views/StyleGuide/StyleGuide";
import ClientList from "../views/ClientManagement/ClientList.container";
import RouteName from "./Route.name";
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import ClientCreate from "../views/ClientManagement/Create/ClientCreate";

import StateCreate from "../views/StateCity/Create/StateCreate.view";
import StateList from "../views/StateCity/StateList";
import CityList from "../views/StateCity/CityList";
import ProgramList from "../views/ProgramManagement/ProgramList";
import ProgramCreate from "../views/ProgramManagement/Create/ProgramCreate.view";
import ClientDetail from "../views/ClientManagement/Detail/ClientDetail";
import PopularCitiesList from "../views/PopularCities/PopularCitiesList";
import ProgramDetail from "../views/ProgramManagement/Detail/ProgramDetail";
import PetList from "../views/PetMaster/PetList";
import PetCreate from "../views/PetMaster/Create/PetCreate.view";
import AppUsersList from "../views/AppUsers/AppUsersList";
import AppUsersDetail from "../views/AppUsers/Detail/AppUsersDeatil";
import QuizCreate from "../views/Quiz/Create/QuizCreate.view";
import QuizDetail from "../views/Quiz/Detail/QuizDetail.view";
import QuizList from "../views/Quiz/List/QuizList";
import HealthTips from "../views/HealthTipsMaster/Create/HealthTips.view";
import HealthTipsList from "../views/HealthTipsMaster/HealthTipsList";
import HealthTipsDetail from "../views/HealthTipsMaster/Detail/HealthTipsDetail.view";
import SettingsIcon from '@mui/icons-material/Settings';
import AppSettingsContainer from "../views/AppSettings/AppSettings.container";
import AppSettings from "../views/AppSetting/AppSetting.view";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DoctorsList from "../views/DoctorMaster/DoctorList.container";
import RewardList from "../views/Reward/List/RewardList";
import RewardCreate from "../views/Reward/Create/RewardCreate.view";
import DashboardPage from "../views/dashboard/Dashboard";
import GiftStoreList from "../views/GiftsStore/List/GiftStoreList";
import GiftStoreCreate from "../views/GiftsStore/Create/GiftStoreCreate.view";
import GiftsStoreDetail from "../views/GiftsStore/Detail/GiftsStoreDetail.view";
import ReportedSideEffects from "../views/ReportedSideEffects/Detail/ReportedSideEffects.view";
import ReportedSideEffectsList from "../views/ReportedSideEffects/List/ReportedSideEffectsList";
import AuditTrialLog from "../views/AuditTrialLog/AuditTrialLog.view";
import AdminUsersCreate from "../views/AdminUsers/Create/AdminUsersCreate.view";
import AdminUsersDetail from "../views/AdminUsers/Detail/AdminUsersdetail.view";
import RoleDetail from "../views/Roles/Detail/RoleDetail";
import RoleCreate from "../views/Roles/RoleCreate";
import RolesList from "../views/Roles/List/RolesList";
import AdminUsersList from "../views/AdminUsers/List/AdminUsersList.view";
import ManagePrivilegesView from "../views/AdminUsers/Detail/components/AssociatedClients/components/ManagePrivileges/ManagePrivilegesView";
import Constants from "../config/constants";
import VitalMasterList from "../views/VitalMaster/List/VitalList";
import VitalMasterCreate from "../views/VitalMaster/Create/VitalMasterCreate.view";
import LanguageList from "../views/LanguageMaster/LanguageList";
import LanguageCreate from "../views/LanguageMaster/Create/LanguageCreate.view";
import LearningHubList from "../views/LearningHub/LearningHubList";
import LearningHubCreateView from "../views/LearningHub/Create/LearningHub.view";
import LearningHubDetailView from "../views/LearningHub/Detail/LearningHubDetail.view";
import VideosList from "../views/VideosMaster/VideosList";
import VideosCreateView from "../views/VideosMaster/Create/VideosCreate.view";
import VideosDetailView from "../views/VideosMaster/Detail/VideosDetail.view";
import ProgramDashboard from "../views/ProgramDashboard/ProgramDashboard.view";
import UserQueriesList from "../views/UserQueries/List/UserQueriesList.view";
import UserQueriesDetail from "../views/UserQueries/Detail/UserQueriesDetail.view";
import Welcome from "../views/Welcome/Welcome.view";
import UserDashboard from "../views/UserDashboard/UserDashboard.view";
import UserProgramQueriesList from "../views/UserProgramQueries/List/UserProgramQueriesList.view";
import UserProgramQueriesDetail from "../views/UserProgramQueries/Detail/UserProgramQueriesDetail.view";
import UpdatedFaqList from "../views/Faq/FaqList.container";
import DoctorDashboard from "../views/DoctorDashboard/DoctorDashboard.view";

const dashboardRoutes = [
  // {
  //   path: "/",
  //   sidebarName: "Dashboard",
  //   icon: Dashboard,
  //   component: DashboardPage,
  //   is_sidebar: true,
  // },
  // {
  //   path: `${RouteName.STYLE_GUIDE}`,
  //   sidebarName: "Style Guide",
  //   icon: FormatShapes,
  //   component: StyleGuide,
  //   is_sidebar: true,
  // },
  {
    path: RouteName.PROGRAM,
    sidebarName: "Program Management",
    icon: Description,
    component: ProgramList,
    is_sidebar: true,
    module: Constants.MODULES.PROGRAM_MANAGEMENT,
    permissions: ['read']
  },
  {
    path: RouteName.PROGRAM_CREATE,
    sidebarName: "Program Management",
    parentRoute: `${RouteName.PROGRAM}`,
    icon: Description,
    component: ProgramCreate,
    is_sidebar: false,
    module: Constants.MODULES.PROGRAM_MANAGEMENT,
    permissions: [ 'create']
  },
  {
    path: `${RouteName.PROGRAM_UPDATE}:id`,
    sidebarName: "Program Management",
    parentRoute: `${RouteName.PROGRAM}`,
    icon: Description,
    component: ProgramCreate,
    is_sidebar: false,
    module: Constants.MODULES.PROGRAM_MANAGEMENT,
    permissions: ['update']
  },
  {
    path: `${RouteName.PROGRAM_DETAIL}:id`,
    sidebarName: "Program Management",
    parentRoute: `${RouteName.PROGRAM}`,
    icon: Description,
    component: ProgramDetail,
    is_sidebar: false,
    module: Constants.MODULES.PROGRAM_MANAGEMENT,
    permissions: ['read']
  },
  {
    path: RouteName.APP_USERS,
    sidebarName: "App Users",
    icon: RememberMe,
    component: AppUsersList,
    is_sidebar: true,
    module: Constants.MODULES.APP_USERS,
    permissions: ['read'],
  },
  {
    path: `${RouteName.APP_DETAIL}:id`,
    sidebarName: "App Users",
    parentRoute: `${RouteName.APP_USERS}`,
    icon: RememberMe,
    component: AppUsersDetail,
    is_sidebar: false,
    module: Constants.MODULES.APP_USERS,
    permissions: ['read']
  },
  {
    path: `${RouteName.CLIENT_MANAGEMENT}`,
    sidebarName: "Client Management",
    icon: GroupAddIcon,
    component: ClientList,
    is_sidebar: true,
    module: Constants.MODULES.CLIENT_MANAGEMENT,
    permissions: ['read']
  },
  {
    path: `${RouteName.CLIENT_CREATE}`,
    parentRoute: `${RouteName.CLIENT_MANAGEMENT}`,
    component: ClientCreate,
    is_sidebar: false,
    is_protect: true,
    module: Constants.MODULES.CLIENT_MANAGEMENT,
    permissions: ['create']
  },
  {
    path: `${RouteName.CLIENT_UPDATE}:id`,
    parentRoute: `${RouteName.CLIENT_MANAGEMENT}`,
    component: ClientCreate,
    is_sidebar: false,
    is_protect: true,
    module: Constants.MODULES.CLIENT_MANAGEMENT,
    permissions: ['update']
  },
  {
    path: `${RouteName.CLIENT_DETAIL}:id`,
    parentRoute: `${RouteName.CLIENT_MANAGEMENT}`,
    component: ClientDetail,
    is_sidebar: false,
    is_protect: true,
    module: Constants.MODULES.CLIENT_MANAGEMENT,
    permissions: ['read']
  },
  {
    path: RouteName.STATE_CITY,
    sidebarName: "State/City Master",
    icon: LocationOn,
    component: StateList,
    is_sidebar: true,
    module: Constants.MODULES.STATE_CITY_MASTER,
    permissions: ['read']
  },
  {
    path: `${RouteName.CITY}:id`,
    sidebarName: "State/City Master",
    parentRoute: `${RouteName.STATE_CITY}`,
    icon: LocationOn,
    component: CityList,
    is_sidebar: false,
    module: Constants.MODULES.STATE_CITY_MASTER,
    permissions: ['read']
  },
  {
    path: RouteName.POPULAR_CITIES,
    sidebarName: "Popular Cities",
    icon: StarsRounded,
    component: PopularCitiesList,
    is_sidebar: true,
    module: Constants.MODULES.POPULAR_CITIES,
    permissions: ['read']
  },
  {
    path: RouteName.PET_MASTER,
    sidebarName: "Pet Master",
    icon: Pets,
    component: PetList,
    is_sidebar: true,
    module: Constants.MODULES.PET_MASTER,
    permissions: ['read']
  },
  {
    path: RouteName.PET_CREATE,
    sidebarName: "Pet Master",
    parentRoute: `${RouteName.PET_MASTER}`,
    icon: Pets,
    component: PetCreate,
    is_sidebar: false,
    module: Constants.MODULES.PET_MASTER,
    permissions: ['create']

  },
  {
    path: `${RouteName.PET_UPDATE}:id`,
    sidebarName: "Pet Master",
    parentRoute: `${RouteName.PET_MASTER}`,
    icon: Pets,
    component: PetCreate,
    is_sidebar: false,
    module: Constants.MODULES.PET_MASTER,
    permissions: ['update']
  },
  {
    path: RouteName.ADMIN,
    sidebarName: "Admin Users",
    icon: ManageAccounts,
    component: AdminUsersList,
    is_sidebar: true,
    parent: "admin_users",
    module: Constants.MODULES.ADMIN_USERS,
    permissions: ['read']
  },
  {
    path: RouteName.ADMIN_CREATE,
    sidebarName: "Admin Users",
    parentRoute: `${RouteName.ADMIN}`,
    icon: ManageAccounts,
    component: AdminUsersCreate,
    is_sidebar: false,
    parent: "admin_users",
    module: Constants.MODULES.ADMIN_USERS,
    permissions: ['create']

  },
  {
    path: `${RouteName.ADMIN_UPDATE}:id`,
    sidebarName: "Admin Users",
    parentRoute: `${RouteName.ADMIN}`,
    icon: ManageAccounts,
    component: AdminUsersCreate,
    is_sidebar: false,
    parent: "admin_users",
    module: Constants.MODULES.ADMIN_USERS,
    permissions: ['update']
  },
  {
    path: `${RouteName.ADMIN_DETAIL}:id`,
    sidebarName: "Admin Users",
    parentRoute: `${RouteName.ADMIN}`,
    icon: ManageAccounts,
    component: AdminUsersDetail,
    is_sidebar: false,
    parent: "admin_users",
    module: Constants.MODULES.ADMIN_USERS,
    permissions: ['read']
  },
  {
    path: `${RouteName. ADMIN_PRIVILEGES}`,
    sidebarName: "Admin Users",
    parentRoute: `${RouteName.ADMIN}`,
    icon: ManageAccounts,
    component: ManagePrivilegesView,
    is_sidebar: false,
    parent: "admin_users",
    // module: Constants.MODULES.ADMIN_USERS,
    // permissions: ['read']
  },
  {
    path: RouteName.HEALTH_TIPS,
    sidebarName: "Health Tips Master",
    icon: TipsAndUpdates,
    component: HealthTipsList,
    is_sidebar: true,
    module: Constants.MODULES.HEALTH_TIPS_MASTER,
    permissions: ['read']
  },
  {
    path: RouteName.HEALTH_CREATE,
    sidebarName: "Health Tips Master",
    parentRoute: `${RouteName.HEALTH_TIPS}`,
    icon: TipsAndUpdates,
    component: HealthTips,
    is_sidebar: false,
    module: Constants.MODULES.HEALTH_TIPS_MASTER,
    permissions: ['create']

  },
  {
    path: `${RouteName.HEALTH_UPDATE}:id`,
    sidebarName: "Health Tips Master",
    parentRoute: `${RouteName.HEALTH_TIPS}`,
    icon: TipsAndUpdates,
    component: HealthTips,
    is_sidebar: false,
    module: Constants.MODULES.HEALTH_TIPS_MASTER,
    permissions: ['update']
  },
  {
    path: `${RouteName.HEALTH_DUPLICATE}:id`,
    sidebarName: "Health Tips Master",
    parentRoute: `${RouteName.HEALTH_TIPS}`,
    icon: TipsAndUpdates,
    component: HealthTips,
    is_sidebar: false,
    module: Constants.MODULES.HEALTH_TIPS_MASTER,
    permissions: ['create']
  },
  {
    path: `${RouteName.HEALTH_DETAIL}:id`,
    sidebarName: "Health Tips Master",
    parentRoute: `${RouteName.HEALTH_TIPS}`,
    icon: TipsAndUpdates,
    component: HealthTipsDetail,
    is_sidebar: false,
    module: Constants.MODULES.HEALTH_TIPS_MASTER,
    permissions: ['read']
  },
  {
    path: RouteName.QUIZ,
    sidebarName: "Quiz",
    icon: Quiz,
    component: QuizList,
    is_sidebar: true,
    module: Constants.MODULES.QUIZES_MODULE,
    permissions: ['read']
  },
  {
    path: RouteName.QUIZ_CREATE,
    sidebarName: "Quiz",
    icon: Quiz,
    component: QuizCreate,
    is_sidebar: false,
    parentRoute: `${RouteName.QUIZ}`,
    module: Constants.MODULES.QUIZES_MODULE,
    permissions: ['create']
  },
  {
    path: `${RouteName.QUIZ_UPDATE}:id`,
    sidebarName: "Quiz",
    icon: Quiz,
    component: QuizCreate,
    is_sidebar: false,
    parentRoute: `${RouteName.QUIZ}`,
    module: Constants.MODULES.QUIZES_MODULE,
    permissions: ['update']
  },
  {
    path: `${RouteName.QUIZ_DETAIL}:id`,
    sidebarName: "Quiz",
    icon: Quiz,
    component: QuizDetail,
    is_sidebar: false,
    parentRoute: `${RouteName.QUIZ}`,
    module: Constants.MODULES.QUIZES_MODULE,
    permissions: ['read']
  },
  {
    path: `${RouteName.QUIZ_DUPLICATE}:id`,
    sidebarName: "Quiz",
    icon: Quiz,
    component: QuizCreate,
    is_sidebar: false,
    parentRoute: `${RouteName.QUIZ}`,
    module: Constants.MODULES.QUIZES_MODULE,
    permissions: ['create']
  },
  {
    path: RouteName.REWARD,
    sidebarName: "Rewards Master",
    icon: EmojiEvents,
    component: RewardList,
    is_sidebar: true,
    module: Constants.MODULES.REWARDS_MASTER,
    permissions: ['read']
  },
  {
    path: RouteName.REWARD_CREATE,
    sidebarName: "Quiz",
    icon: EmojiEvents,
    component: RewardCreate,
    is_sidebar: false,
    parentRoute: `${RouteName.REWARD}`,
    module: Constants.MODULES.REWARDS_MASTER,
    permissions: ['create']
  },
  {
    path: `${RouteName.REWARD_UPDATE}:id`,
    sidebarName: "Quiz",
    icon: EmojiEvents,
    component: RewardCreate,
    is_sidebar: false,
    parentRoute: `${RouteName.REWARD}`,
    module: Constants.MODULES.REWARDS_MASTER,
    permissions: ['update']
  },
  {
    path: RouteName.APP_SETTINGS,
    sidebarName: "App Settings",
    icon: SettingsIcon,
    component: AppSettings,
    is_sidebar: true,
    module: Constants.MODULES.APP_SETTINGS,
    permissions: ['read']
  },
  {
    path: RouteName.DOCTOR_MASTER,
    sidebarName: "Doctor Master",
    icon: AddCircleIcon,
    component: DoctorsList,
    is_sidebar: true,
    module: Constants.MODULES.DOCTOR_MASTER,
    permissions: ['read']
  },
  {
    path: RouteName.GIFT,
    sidebarName: "Gifts Store",
    icon: CardGiftcard,
    component: GiftStoreList,
    is_sidebar: true,
    module: Constants.MODULES.GIFT_STORE,
    permissions: ['read']
  },
  {
    path: RouteName.GIFT_CREATE,
    sidebarName: "Gifts Store",
    icon: CardGiftcard,
    component: GiftStoreCreate,
    is_sidebar: false,
    parentRoute: `${RouteName.GIFT}`,
    module: Constants.MODULES.GIFT_STORE,
    permissions: ['create']
  },
  {
    path: `${RouteName.GIFT_UPDATE}:id`,
    sidebarName: "Gifts Store",
    icon: CardGiftcard,
    component: GiftStoreCreate,
    is_sidebar: false,
    parentRoute: `${RouteName.GIFT}`,
    module: Constants.MODULES.GIFT_STORE,
    permissions: ['update']
  },
  {
    path: `${RouteName.GIFT_DETAIL}:id`,
    sidebarName: "Gifts Store",
    icon: CardGiftcard,
    component: GiftsStoreDetail,
    is_sidebar: false,
    parentRoute: `${RouteName.GIFT}`,
    module: Constants.MODULES.GIFT_STORE,
    permissions: ['read']
  },
  {
    path: RouteName.DASHBOARD,
    sidebarName: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    is_sidebar: true,
    module: Constants.MODULES.DASHBOARD,
    permissions: ['read']
  },
  {
    path: RouteName.PROGRAM_DASHBOARD,
    sidebarName: "Program Adherence",
    icon: Dashboard,
    component: ProgramDashboard,
    is_sidebar: true,
    module: Constants.MODULES.DASHBOARD,
    permissions: ['read']
  },
  {
    path: RouteName.DOCTOR_DASHBOARD,
    sidebarName: "Doctor Performance",
    icon: Dashboard,
    component: DoctorDashboard,
    is_sidebar: true,
    module: Constants.MODULES.DASHBOARD,
    permissions: ['read']
  },
  
  {
    path: RouteName.USER_ENGAGEMENT_DASHBOARD,
    sidebarName: "User Engagement",
    icon: Handshake,
    component: UserDashboard,
    is_sidebar: true,
    // module: Constants.MODULES.DASHBOARD,
    // permissions: ['read']
  },
  {
    path: RouteName.AUDIT_CREATE,
    sidebarName: "Audit Trail Log",
    icon: ReceiptLong,
    component: AuditTrialLog,
    is_sidebar: true,
    parentRoute: `${RouteName.AUDIT_CREATE}`,
  },
  {
    path: RouteName.REPORTED,
    sidebarName: "Reported Side Effects",
    icon: Sick,
    component: ReportedSideEffectsList,
    is_sidebar: true,
    module: Constants.MODULES.REPORTED_SIDE_EFFECTS,
    permissions: ['read']
  },
  {
    path: `${RouteName.REPORTED_DETAIL}:id`,
    sidebarName: "Reported Side Effects",
    icon: Sick,
    component: ReportedSideEffects,
    is_sidebar: false,
    parentRoute: `${RouteName.REPORTED}`,
    module: Constants.MODULES.REPORTED_SIDE_EFFECTS,
    permissions: ['read']
  },
  {
    path: "null",
    sidebarName: "Admin Users",
    navbarName: "Admin Users",
    icon: AccountCircleRounded,
    is_sidebar: true,
    slug: "admin_users",
    is_parent: true,
  },
  {
    path: `${RouteName.ROLES}`,
    sidebarName: "Roles",
    icon: School,
    component: RolesList,
    is_sidebar: true,
    parent: "admin_users",
    module: Constants.MODULES.ROLES,
    permissions: ['read']
  },
  {
    path: `${RouteName.ROLE_CREATE}`,
    parentRoute: `${RouteName.ROLES}`,
    component: RoleCreate,
    is_sidebar: false,
    is_protect: true,
    module: Constants.MODULES.ROLES,
    permissions: ['create']
  },
  {
    path: `${RouteName.ROLE_UPDATE}:id`,
    parentRoute: `${RouteName.ROLES}`,
    component: RoleCreate,
    is_sidebar: false,
    is_protect: true,
    module: Constants.MODULES.ROLES,
    permissions: ['update']
  },
  {
    path: `${RouteName.ROLE_DETAIL}:id`,
    parentRoute: `${RouteName.ROLES}`,
    component: RoleDetail,
    is_sidebar: false,
    is_protect: true,
    module: Constants.MODULES.ROLES,
    permissions: ['read']
  },
  {
    path: `${RouteName.VITAL_MASTER}`,
    sidebarName: "Vitals",
    icon: Medication,
    component: VitalMasterList,
    is_sidebar: true,
    // module: Constants.MODULES.ROLES,
    permissions: ['read']
  },
  {
    path: `${RouteName.VITAL_CREATE}`,
    parentRoute: `${RouteName.VITAL_MASTER}`,
    component: VitalMasterCreate,
    is_sidebar: false,
    is_protect: true,
    // module: Constants.MODULES.ROLES,
    permissions: ['create']
  },
  {
    path: `${RouteName.VITAL_UPDATE}:id`,
    parentRoute: `${RouteName.VITAL_MASTER}`,
    component: VitalMasterCreate,
    is_sidebar: false,
    is_protect: true,
    // module: Constants.MODULES.ROLES,
    permissions: ['create']
  },
  {
    path: `${RouteName.LEARNING_HUB_MASTER}`,
    sidebarName: `Learning Hub`,
    icon: MenuBook,
    component: LearningHubList,
    is_sidebar: true,
    module: Constants.MODULES.LEARNING_HUB,
    permissions: ['read']
  },
  {
    path: `${RouteName.LEARNING_HUB_CREATE}`,
    parentRoute: `${RouteName.LEARNING_HUB_MASTER}`,
    component: LearningHubCreateView,
    is_sidebar: false,
    is_protect: true,
    permissions: ['create']
  },
  {
    path: `${RouteName.LEARNING_HUB_UPDATE}:id`,
    parentRoute: `${RouteName.LEARNING_HUB_MASTER}`,
    component: LearningHubCreateView,
    is_sidebar: false,
    is_protect: true,
    permissions: ['create']
  },
  {
    path: `${RouteName.LEARNING_HUB_DETAIL}:id`,
    parentRoute: `${RouteName.LEARNING_HUB_MASTER}`,
    component: LearningHubDetailView,
    is_sidebar: false,
    is_protect: true,
    permissions: ['read']
  },
  {
    path: `${RouteName.LANGUAGE_MASTER}`,
    sidebarName: "Language Master",
    icon: GTranslate,
    component: LanguageList,
    is_sidebar: true,
    // module: Constants.MODULES.ROLES,
    permissions: ['read']
  },
  {
    path: `${RouteName.LANGUAGE_CREATE}`,
    parentRoute: `${RouteName.LANGUAGE_MASTER}`,
    component: LanguageCreate,
    is_sidebar: false,
    is_protect: true,
    // module: Constants.MODULES.ROLES,
    permissions: ['create']
  },
  {
    path: `${RouteName.LANGUAGE_UPDATE}:id`,
    parentRoute: `${RouteName.LANGUAGE_MASTER}`,
    component: LanguageCreate,
    is_sidebar: false,
    is_protect: true,
    // module: Constants.MODULES.ROLES,
    permissions: ['create']
  },
  {
    path: `${RouteName.VIDEOS_MASTER}`,
    sidebarName: `Videos Master`,
    icon: VideoLibrary,
    component: VideosList,
    is_sidebar: true,
    module: Constants.MODULES.VIDEO_EXPLORE,
    permissions: ['read']
  },
  {
    path: `${RouteName.VIDEOS_CREATE}`,
    parentRoute: `${RouteName.VIDEOS_MASTER}`,
    component: VideosCreateView,
    is_sidebar: false,
    is_protect: true,
    permissions: ['create']
  },
  {
    path: `${RouteName.VIDEOS_UPDATE}:id`,
    parentRoute: `${RouteName.VIDEOS_MASTER}`,
    component: VideosCreateView,
    is_sidebar: false,
    is_protect: true,
    permissions: ['create']
  },
  {
    path: `${RouteName.VIDEOS_DETAIL}:id`,
    parentRoute: `${RouteName.VIDEOS_MASTER}`,
    component: VideosDetailView,
    is_sidebar: false,
    is_protect: true,
    permissions: ['read']
  },
  {
    path: RouteName.USER_QUERIES,
    sidebarName: "User Queries",
    icon: ContactSupport,
    component: UserQueriesList,
    is_sidebar: true,
    module: Constants.MODULES.SUPPORT_REQUEST,
    permissions: ['read']
  },
  {
    path: `${RouteName.USER_QUERIES_DETAIL}:id`,
    sidebarName: "User Queries",
    icon: ContactSupport,
    component: UserQueriesDetail,
    is_sidebar: false,
    parentRoute: `${RouteName.USER_QUERIES}`,

  },
  {
    path: `${RouteName.WELCOME}`,
    sidebarName: "Welcome",
    icon: ContactSupport,
    component: Welcome,
    is_sidebar: false,
    // module: Constants.MODULES.WELCOME,
    
  },
  {
    path: RouteName.PROGRAM_QUERIES,
    sidebarName: "User Program Queries",
    icon: People,
    component: UserProgramQueriesList,
    is_sidebar: true,
    // module: Constants.MODULES.SUPPORT_REQUEST,
    // permissions: ['read']
  },
  {
    path: `${RouteName.PROGRAM_QUERIES_DETAIL}:id`,
    sidebarName: "User Program Queries",
    icon: People,
    component: UserProgramQueriesDetail,
    is_sidebar: false,
    parentRoute: `${RouteName.PROGRAM_QUERIES}`,

  },
  {
    path: RouteName.CHAT_MASTER,
    sidebarName: "Chat Master",
    icon: Message,
    component: UpdatedFaqList,
    is_sidebar: true,
    is_protect: true,
  },
];

export default dashboardRoutes;
