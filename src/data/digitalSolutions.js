import DynaudioDS from "./DigitalSolutions/Dynaudio";
import BytonDS from "./DigitalSolutions/Byton";
import PorscheDS from "./DigitalSolutions/Porsche";

/*
// 解决方案属性介绍
title: 解决方案名称
client: 该解决方案是为哪个客户服务的
media: 该解决方案的静态资源
body: 解决方案的详情介绍，不同的解决方案是不同的，有的只有图片，有的包含视频。
*/


// 解决方案列表
const digitalSolutions = [
    DynaudioDS,
    BytonDS,
    PorscheDS
]

export default digitalSolutions