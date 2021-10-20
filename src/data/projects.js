// Import all project data first
import {GDDC2019} from "./Projects/GDDC2019";
import {PorschePhotoFairs2019} from "./Projects/PorschePhotoFairs2019";
import {iQOO} from "./Projects/iQOO";
import {TCL} from "./Projects/TCL"
import {AudiAIME} from "./Projects/AudiAIME";
import {MonetGardenAfternoonTea} from "./Projects/MonetGardenAfternoonTea";
import {FendiAfterParty} from "./Projects/FendiAfterParty";
import {Dynaudio} from "./Projects/DynaAudio";
import {X27} from "./Projects/X27";
import {VivoNex} from "./Projects/VivoNex";
import {Lego} from "./Projects/Lego";
import {CocoCrush} from "./Projects/CocoCrush";
import {PizzaHutCNY2021} from "./Projects/PizzaHutCNY2021";
import {QiangEmbroidery} from "./Projects/QiangEmbroidery";
import {PwcCIIE2020} from "./Projects/PwcCIIE2020";
import {PiagetCIIE2020} from "./Projects/PiagetCIIE2020";
import {LegoCIIE2020} from "./Projects/LegoCIIE2020";
import {Calzedonia} from "./Projects/Calzedonia";
import {JaegerLeCoultre} from "./Projects/JaegerLeCoultre";

/*
// 项目属性介绍
slug: 项目路由
name: 项目名字，用于项目列表中名字显示，以及用于列表遍历的key值
client: 客户的名字。格式为：乙方 / 甲方
cover: 代表项目的图片，用于项目列表中展示，或者项目详情页中的第一个图片展示
components: 使用了哪些技术或者硬件
type: 项目类型（Press event, Exhibition, Conference, Installation, Product Launch）
location: 项目地点
title: 项目标题
summary: 项目概述
body: 详情介绍，不同的项目是不同的，有的只有图片介绍，有的包含视频介绍
awards: 获奖情况，有的项目有，有的项目没有

*/

// Place up to 6 projects as featured in the desired order
export const featured = [
    PizzaHutCNY2021,
    GDDC2019,
    PorschePhotoFairs2019,
    iQOO,
    TCL,
    AudiAIME,
]

// Place all remaining projects intended for display
export const projects = [
    JaegerLeCoultre,
    Calzedonia,
    LegoCIIE2020,
    PiagetCIIE2020,
    PwcCIIE2020,
    QiangEmbroidery,
    PizzaHutCNY2021,
    MonetGardenAfternoonTea,
    GDDC2019,
    PorschePhotoFairs2019,
    TCL,
    iQOO,
    CocoCrush,
    AudiAIME,
    FendiAfterParty,
    X27,
    VivoNex,
    Lego,
    Dynaudio,
]
