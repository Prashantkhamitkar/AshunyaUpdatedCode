import React from "react";
import { Navigate } from "react-router-dom";

//Dashboard

// Import Calender
import Calender from "../Pages/Calender";

// Import E-mail
import Inbox from "../Pages/E-mail/Inbox";
import ReadEmail from "../Pages/E-mail/ReadEmail";
import EmailCompose from "../Pages/E-mail/EmailCompose";

// Import Authentication pages

// Import Authentication Inner Pages

// Import Utility Pages
import StarterPage from "../Pages/Utility/Starter-Page";
import Maintenance from "../Pages/Utility/Maintenance-Page";
import ComingSoon from "../Pages/Utility/ComingSoon-Page";
import TimeLine from "../Pages/Utility/TimeLine-Page";
import FAQs from "../Pages/Utility/FAQs-Page";
import Pricing from "../Pages/Utility/Pricing-Page";
import Error404 from "../Pages/Utility/Error404-Page";
import Error500 from "../Pages/Utility/Error500-Page";

// Import UIElement Pages
import UiAlerts from "../Pages/UiElements/UiAlerts";
import UiBadge from "../Pages/UiElements/UiBadge";
import UiBreadcrumb from "../Pages/UiElements/UiBreadcrumb";
import UiButtons from "../Pages/UiElements/UiButtons";
import UiCards from "../Pages/UiElements/UiCards";
import UiCarousel from "../Pages/UiElements/UiCarousel";
import UiDropdown from "../Pages/UiElements/UiDropdowns";
import UiGrid from "../Pages/UiElements/UiGrid";
import UiImages from "../Pages/UiElements/UiImages";
import UiLightbox from "../Pages/UiElements/UiLightbox";
import UiModals from "../Pages/UiElements/UiModals";
import UiOffcanvas from "../Pages/UiElements/UiOffcanvas";
import UiRangeSlider from "../Pages/UiElements/UiRangeSlider";
import UiSessionTimeout from "../Pages/UiElements/UiSessionTimeout";
import UiPagination from "../Pages/UiElements/UiPagination";
import UiProgressBars from "../Pages/UiElements/UiProgressBars";
import UiPlaceholders from "../Pages/UiElements/UiPlaceholders";
import UiTabs from "../Pages/UiElements/UiTabs&Accordions";
import UiTypography from "../Pages/UiElements/UiTypography";
import UiToasts from "../Pages/UiElements/UiToasts";
import UiVideo from "../Pages/UiElements/UiVideo";
import UiPopovers from "../Pages/UiElements/UiPopovers&Tooltips";
import UiRating from "../Pages/UiElements/UiRating";

// Import Forms
import FormEditors from "../Pages/Forms/FormEditors";
import FormUpload from "../Pages/Forms/FormUpload";
import FormXeditable from "../Pages/Forms/FormXeditable";
import FormMask from "../Pages/Forms/FormMask";
import FormElements from "../Pages/Forms/FormElements";
import FormAdvanced from "../Pages/Forms/FormAdvanced";
import FormValidations from "../Pages/Forms/FormValidations";
import FormWizard from "../Pages/Forms/FormWizard";

// Import Tables
import BasicTable from "../Pages/Tables/BasicTable.js";
import ListJs from "../Pages/Tables/ListTables/ListTables";
import DataTable from "../Pages/Tables/DataTables/DataTables";

// Import Charts
import ApexCharts from "../Pages/Charts/ApexCharts";
import ChartJs from "../Pages/Charts/ChartjsCharts";
import Sparklinechart from "../Pages/Charts/SparklineCharts";
import FloatChart from "../Pages/Charts/FloatCharts";
import JknobCharts from "../Pages/Charts/JqueryKnobCharts";

// Import Icon Pages
import IconMaterialdesign from "../Pages/Icons/IconMaterialdesign";
import IconFontawesome from "../Pages/Icons/IconFontAwesome";
import IconDripicons from "../Pages/Icons/IconDrip";
import IconBoxicons from "../Pages/Icons/IconBoxicons";

// Import Map Pages
import VectorMaps from "../Pages/Maps/VectorMap";
import GoogleMap from "../Pages/Maps/GoogleMap";

// Import MSP Pages
import Index from "../Pages/MSP/TicketCreation/Index.jsx";
import DashboardIndex from "../Pages/MSP/Dashboard/DashboardIndex.jsx";
import CustomerIndex from "../Pages/MSP/Customer/CustomerIndex.jsx";
import Logout from "../Pages/MSP/Nonauthenticated/Logout.jsx";
import Login from "../Pages/MSP/Nonauthenticated/Login.jsx";
import TicketModificationIndex from "../Pages/MSP/TicketModification/TicketModificationIndex.jsx";

import NewContractIndex from "../Pages/MSP/Contract/NewContract/NewContractIndex.jsx";
import ContractIndex from "../Pages/MSP/Contract/Contract View List/ContractIndex.jsx";

import MyShifts from "../Pages/MSP/HR/Shift Management/MyShifts.jsx";
import PickShift from "../Pages/MSP/HR/Shift Management/PickShift.jsx";
import ShiftManagementIndex from "../Pages/MSP/HR/Shift Management/ShiftManagementIndex.jsx";
import MyLeaves from "../Pages/MSP/HR/My Leaves/MyLeaves.jsx";
import HolidayIndex from "../Pages/MSP/HR/Holiday/HolidayIndex.jsx";
import AssigneeIndex from "../Pages/MSP/HelpDesk/Assignees/AssigneeIndex.jsx";
import BackupIndex from "../Pages/MSP/HelpDesk/Backup/BackupIndex.jsx";
import MspBackupIndex from "../Pages/MSP/HelpDesk/MSP360 Backups/MspBackupIndex.jsx";
import TicketPageIndex from "../Pages/MSP/HelpDesk/TicketPage/TicketPageIndex.jsx";
import WeekendTaskIndex from "../Pages/MSP/HelpDesk/Weekends Task/WeekendTaskIndex.jsx";
import ContractCalendar from "../Pages/MSP/Contract/Contract Calendar/ContractCalendar.jsx";
import KnowledgeIndex from "../Pages/MSP/Knowledge Base/KnowledgeIndex.jsx";
import Attachments from "../Pages/MSP/Knowledge Base/Edit Article/Attachments.jsx";
import TimesheetIndex from "../Pages/MSP/Timesheet/TimesheetIndex.jsx";
import AttendanceDashIndex from "../Pages/MSP/HR/Attendance Dashboard/AttendanceDashIndex.jsx";
import BackblazeChargesIndex from "../Pages/MSP/Billing/Backblaze Charges/BackblazeChargesIndex.jsx";
import ShiftsDashboardIndex from "../Pages/MSP/HR/Shift Management/Shifts Dashboard/ShiftsDashboardIndex.jsx";
import AllocateShiftsIndex from "../Pages/MSP/HR/Shift Management/Allocate Shifts/AllocateShiftsIndex.jsx";
import LeaveManagementIndex from "../Pages/MSP/HR/Leave Management/LeaveManagementIndex.jsx";


const authProtectedRoutes = [
  //dashboard
  { path: "/dashboard", component: <DashboardIndex /> },

  //msp pages
  { path: "/ticketcreation", component: <Index /> },
  {
    path: "/ticketmodification/:ticketnumber",
    component: <TicketModificationIndex />,
  },
  { path: "/mspdashboard", component: <DashboardIndex /> },
  { path: "/ticket", component: <TicketPageIndex /> },
  { path: "/mspcustomer", component: <CustomerIndex /> },
  { path: "/technician", component: <AssigneeIndex /> },
  { path: "/backup", component: <BackupIndex /> },
  { path: "/msp-backup", component: <MspBackupIndex /> },
  { path: "/weekend-tasks", component: <WeekendTaskIndex /> },
  { path: "/my-shifts", component: <MyShifts /> },
  { path: "/pick-shifts", component: <PickShift /> },
  { path: "/manage-shift", component: <ShiftManagementIndex /> },
  { path: "/my-leaves", component: <MyLeaves /> },
  { path: "/holiday-list", component: <HolidayIndex /> },
  { path: "/contract-calendar-view", component: <ContractCalendar /> },
  { path: "/new-contract", component: <NewContractIndex /> },
  { path: "/contract-list", component: <ContractIndex /> },
  { path: "/knowledge-base", component: <KnowledgeIndex /> },
  { path: "/edit-article/:pid", component: <Attachments /> },
  { path: "/timesheet", component: <TimesheetIndex /> },
  { path: "/attendance-dashboard",component:<AttendanceDashIndex/> },
  {path:"/backblazecharges",component:<BackblazeChargesIndex/>},
  {path:"/shifts-dashboard",component:<ShiftsDashboardIndex/>},
  {path:"/allocate-shifts",component:<AllocateShiftsIndex/>},
  {path:"/leave-management",component:<LeaveManagementIndex/>},
  // Calender
  { path: "/calendar", component: <Calender /> },

  // Profile

  // E-mail
  { path: "/inbox", component: <Inbox /> },
  { path: "/read-email", component: <ReadEmail /> },
  { path: "/compose-email", component: <EmailCompose /> },

  // Utility Pages
  { path: "/pages-starter", component: <StarterPage /> },
  { path: "/pages-timeline", component: <TimeLine /> },
  { path: "/pages-faqs", component: <FAQs /> },
  { path: "/pages-pricing", component: <Pricing /> },

  // UiElements Pages
  { path: "/ui-alerts", component: <UiAlerts /> },
  { path: "/ui-badge", component: <UiBadge /> },
  { path: "/ui-breadcrumb", component: <UiBreadcrumb /> },
  { path: "/ui-buttons", component: <UiButtons /> },
  { path: "/ui-cards", component: <UiCards /> },
  { path: "/ui-carousel", component: <UiCarousel /> },
  { path: "/ui-dropdowns", component: <UiDropdown /> },
  { path: "/ui-grid", component: <UiGrid /> },
  { path: "/ui-images", component: <UiImages /> },
  { path: "/ui-lightbox", component: <UiLightbox /> },
  { path: "/ui-modals", component: <UiModals /> },
  { path: "/ui-offcanvas", component: <UiOffcanvas /> },
  { path: "/ui-rangeslider", component: <UiRangeSlider /> },
  { path: "/ui-sessiontimeout", component: <UiSessionTimeout /> },
  { path: "/ui-pagination", component: <UiPagination /> },
  { path: "/ui-progressbars", component: <UiProgressBars /> },
  { path: "/ui-placeholders", component: <UiPlaceholders /> },
  { path: "/ui-tabs-accordions", component: <UiTabs /> },
  { path: "/ui-typography", component: <UiTypography /> },
  { path: "/ui-toasts", component: <UiToasts /> },
  { path: "/ui-video", component: <UiVideo /> },
  { path: "/ui-popovers", component: <UiPopovers /> },
  { path: "/ui-rating", component: <UiRating /> },

  // Forms pages
  { path: "/form-elements", component: <FormElements /> },
  { path: "/form-validation", component: <FormValidations /> },
  { path: "/form-advanced", component: <FormAdvanced /> },
  { path: "/form-editor", component: <FormEditors /> },
  { path: "/form-uploads", component: <FormUpload /> },
  { path: "/form-editors", component: <FormXeditable /> },
  { path: "/form-wizard", component: <FormWizard /> },
  { path: "/form-mask", component: <FormMask /> },

  // Tables pages
  { path: "/tables-basic", component: <BasicTable /> },
  { path: "/tables-listjs", component: <ListJs /> },
  { path: "/table-datatables", component: <DataTable /> },

  // Charts Pages
  { path: "/chart-apexcharts", component: <ApexCharts /> },
  { path: "/chart-chartjscharts", component: <ChartJs /> },
  { path: "/chart-floatcharts", component: <FloatChart /> },
  { path: "/chart-jknobcharts", component: <JknobCharts /> },
  { path: "/chart-sparklinecharts", component: <Sparklinechart /> },

  // Icons Pages
  { path: "/icon-boxicon", component: <IconBoxicons /> },
  { path: "/icons-materialdesign", component: <IconMaterialdesign /> },
  { path: "/icons-fontawesome", component: <IconFontawesome /> },
  { path: "/icon-dripicons", component: <IconDripicons /> },

  // Maps Pages
  { path: "/maps-vector", component: <VectorMaps /> },
  { path: "/maps-google", component: <GoogleMap /> },

  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  {
    path: "/",
    exact: true,
    component: <Navigate to="/dashboard" />,
  },
];

const publicRoutes = [
  // Authentication Page
  { path: "/logout", component: <Logout /> },
  { path: "/login", component: <Login /> },

  // Utility Pages
  { path: "/pages-404", component: <Error404 /> },
  { path: "/pages-500", component: <Error500 /> },
  { path: "/pages-maintenance", component: <Maintenance /> },
  { path: "/pages-comingsoon", component: <ComingSoon /> },
];

export { authProtectedRoutes, publicRoutes };
