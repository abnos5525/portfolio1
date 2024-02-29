import {
    CameraAltOutlined, ImageOutlined,
    MonitorOutlined,
    PhoneAndroidOutlined,
    PieChartOutline,
    RocketLaunchOutlined
} from "@mui/icons-material";

export const MyServicesInfo = ()=> {

    const data = [
        {
            icon: <CameraAltOutlined sx={{fontSize: 40}}/>,
            title: "عکاسی",
            description: "عکاسی، هنری است که از طریق آن می‌توان داستان‌ها و لحظات را بازنمایی کرد. هر عکس، داستان خاص خودش را دارد و عکاس با دید خاص خود، آن را از زوایای مختلفی به تصویر می‌کشد."
        },
        {
            icon: <MonitorOutlined sx={{fontSize: 40}}/>,
            title: "توسعه وب",
            description: "توسعه وب، فرایندی است که از طریق آن وب‌سایت‌ها و برنامه‌های وب ایجاد و بهینه می‌شوند تا به کاربران تجربه بهتری ارائه دهند و اهداف مختلفی از جمله افزایش فروش، ارتقاء شناخت برند، و ارتباط بهتر با مخاطبان را دنبال کنند."
        },
        {
            icon: <PieChartOutline sx={{fontSize: 40}}/>,
            title: "طراحی وب",
            description: "طراحی وب، فرایند ایجاد رابط کاربری جذاب و کارآمد برای وب‌سایت‌ها و برنامه‌های وب است که شامل انتخاب رنگ‌ها، فونت‌ها، تصاویر و سایر عناصر گرافیکی می‌شود به منظور بهبود تجربه کاربری."
        },
        {
            icon: <RocketLaunchOutlined sx={{fontSize: 40}}/>,
            title: "طراحی گرافیک",
            description: "طراحی گرافیک هنر ایجاد ارتباط بصری میان مخاطبان و محتواست."
        },
        {
            icon: <PhoneAndroidOutlined sx={{fontSize: 40}}/>,
            title: "رابط برنامه‌ها",
            description: "رابط برنامه‌ها (API) مجموعه‌ای از قوانین و ابزارهاست که به برنامه‌نویسان امکان ارتباط و تعامل با برنامه‌ها و سرویس‌ها را می‌دهد."
        },
        {
            icon: <ImageOutlined sx={{fontSize: 40}}/>,
            title: "ویدیو",
            description: "ادیت ویدیو، فرایند ویرایش و تغییر ویدیوها با استفاده از نرم‌افزارهای ویرایش ویدیو، به منظور بهبود کیفیت، اضافه کردن افکت‌ها، و ایجاد جذابیت بیشتر است"
        }
    ]

    return data
}