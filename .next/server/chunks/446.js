"use strict";
exports.id = 446;
exports.ids = [446];
exports.modules = {

/***/ 1446:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var modularize_import_loader_name_ChevronDown_from_default_as_default_join_esm_icons_chevron_down_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8971);
/* harmony import */ var modularize_import_loader_name_ChevronRight_from_default_as_default_join_esm_icons_chevron_right_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4998);
/* harmony import */ var modularize_import_loader_name_Menu_from_default_as_default_join_esm_icons_menu_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7232);
/* harmony import */ var modularize_import_loader_name_X_from_default_as_default_join_esm_icons_x_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1352);









const servicesDropdownItems = [
    {
        category: "Managed Security Services",
        available: true,
        href: "/services/managed-security-services",
        icon: "\uD83D\uDEE1️",
        items: [
            {
                title: "Managed Firewall & Network Security",
                href: "/services/managed-security-services#firewall",
                available: true
            },
            {
                title: "Endpoint Detection & Response (EDR)",
                href: "/services/managed-security-services#edr",
                available: true
            },
            {
                title: "Managed Detection & Response (MDR)",
                href: "/services/managed-security-services#mdr",
                available: true
            },
            {
                title: "Managed SOAR",
                href: "/services/managed-security-services#soar",
                available: true
            },
            {
                title: "Cloud Security Management",
                href: "/services/managed-security-services#cloud",
                available: true
            },
            {
                title: "Managed Vulnerability Intelligence",
                href: "/services/managed-security-services#vulnerability",
                available: true
            }
        ]
    },
    {
        category: "Professional & Advisory Services",
        available: true,
        href: "/services#professional-advisory-services",
        icon: "\uD83D\uDC65",
        items: [
            {
                title: "Identity & Access Management",
                href: "/services#iam",
                available: true
            },
            {
                title: "Defence Architecture",
                href: "/services#architecture",
                available: true
            },
            {
                title: "Governance, Risk & Compliance (GRC)",
                href: "/services#grc",
                available: true
            },
            {
                title: "Security Maturity Assessments",
                href: "/services#assessments",
                available: true
            },
            {
                title: "Cloud Security Assessments",
                href: "/services#cloud-assessments",
                available: true
            },
            {
                title: "Subject Matter Experts",
                href: "/services#sme",
                available: true
            }
        ]
    },
    {
        category: "Offensive Security & Testing",
        available: true,
        href: "/services#offensive-security-testing",
        icon: "\uD83C\uDFAF",
        items: [
            {
                title: "Penetration Testing",
                href: "/services#pentesting",
                available: true
            },
            {
                title: "Red Team Assessments",
                href: "/services#redteam",
                available: true
            },
            {
                title: "Infrastructure Assessments",
                href: "/services#infrastructure",
                available: true
            },
            {
                title: "Compromise Assessments",
                href: "/services#compromise",
                available: true
            }
        ]
    },
    {
        category: "Threat Intelligence & Incident Response",
        available: true,
        href: "/services#threat-intelligence-incident-response",
        icon: "\uD83D\uDD0D",
        items: [
            {
                title: "Threat Intelligence Services",
                href: "/services#threat-intel",
                available: true
            },
            {
                title: "Cybersecurity Incident Response",
                href: "/services#incident-response",
                available: true
            },
            {
                title: "Security Operations Center (SOC) Services",
                href: "/services#soc",
                available: true
            },
            {
                title: "Malware Analysis & Forensics",
                href: "/services#malware",
                available: true
            }
        ]
    },
    {
        category: "Training & Awareness",
        available: true,
        href: "/services#training-awareness",
        icon: "\uD83C\uDF93",
        items: [
            {
                title: "Security Awareness Training",
                href: "/services#awareness",
                available: true
            },
            {
                title: "Technical Training Workshops",
                href: "/services#technical",
                available: true
            },
            {
                title: "Executive Security Briefings",
                href: "/services#executive",
                available: true
            }
        ]
    }
];
function Navbar() {
    const [servicesDropdownOpen, setServicesDropdownOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [mobileMenuOpen, setMobileMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [scrolled, setScrolled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const dropdownRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handleScroll = ()=>{
            setScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handleClickOutside = (event)=>{
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                const dropdownContent = document.querySelector(".dropdown-content");
                if (!dropdownContent || !dropdownContent.contains(event.target)) {
                    setServicesDropdownOpen(false);
                }
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    const handleServicesClick = ()=>{
        setServicesDropdownOpen(!servicesDropdownOpen);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/95 backdrop-blur-md border-b border-gray-800/50 shadow-lg" : "bg-black border-b border-gray-800"}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-full px-4 sm:px-6 lg:px-8",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center justify-between h-16 lg:h-18",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: "/",
                                    className: "flex items-center flex-shrink-0",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        src: "/logo.png",
                                        alt: "Command Centre IT",
                                        width: 200,
                                        height: 200,
                                        className: "hover:opacity-90 transition-opacity duration-200"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "hidden lg:flex items-center space-x-1",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "relative",
                                            ref: dropdownRef,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                className: "flex items-center px-4 py-2 text-white font-medium hover:text-[#1C0AA3] hover:bg-gray-900/50  transition-all duration-200 group",
                                                onClick: handleServicesClick,
                                                children: [
                                                    "Services",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_ChevronDown_from_default_as_default_join_esm_icons_chevron_down_lucide_react__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                        className: `ml-1 w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? "rotate-180" : ""}`
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: "/about",
                                            className: "px-4 py-2 text-white font-medium hover:text-[#1C0AA3] hover:bg-gray-900/50  transition-all duration-200",
                                            children: "About"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: "/contact",
                                            className: "px-4 py-2 text-white font-medium hover:text-[#1C0AA3] hover:bg-gray-900/50  transition-all duration-200",
                                            children: "Contact"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "lg:hidden",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: ()=>setMobileMenuOpen(!mobileMenuOpen),
                                        className: "p-2 text-white hover:text-[#1C0AA3] hover:bg-gray-900/50  transition-all duration-200",
                                        "aria-label": "Toggle mobile menu",
                                        children: mobileMenuOpen ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_X_from_default_as_default_join_esm_icons_x_lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            className: "w-6 h-6"
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_Menu_from_default_as_default_join_esm_icons_menu_lucide_react__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                            className: "w-6 h-6"
                                        })
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `lg:hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "bg-gray-900/95 backdrop-blur-md border-t border-gray-800",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "px-4 py-4 space-y-2",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                className: "flex items-center justify-between w-full px-4 py-3 text-white font-medium hover:text-[#1C0AA3] hover:bg-gray-800/50  transition-all duration-200",
                                                onClick: ()=>setServicesDropdownOpen(!servicesDropdownOpen),
                                                children: [
                                                    "Services",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_ChevronDown_from_default_as_default_join_esm_icons_chevron_down_lucide_react__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                        className: `w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? "rotate-180" : ""}`
                                                    })
                                                ]
                                            }),
                                            servicesDropdownOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "mt-2 space-y-3",
                                                children: servicesDropdownItems.map((category, categoryIndex)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "pl-4",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: `flex items-center space-x-2 px-3 py-2  ${category.available ? "text-white" : "text-gray-500"}`,
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_ChevronRight_from_default_as_default_join_esm_icons_chevron_right_lucide_react__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "text-sm",
                                                                        children: category.icon
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "font-medium text-sm",
                                                                        children: category.category
                                                                    }),
                                                                    !category.available && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "text-xs bg-gray-700 text-gray-400 px-2 py-1",
                                                                        children: "Soon"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "ml-4 mt-1 space-y-1",
                                                                children: category.items.map((item, itemIndex)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                        href: item.available ? item.href : "#",
                                                                        className: `block px-3 py-2  text-sm transition-all duration-200 ${item.available ? "text-gray-300 hover:text-white hover:bg-gray-800/50" : "text-gray-500 cursor-not-allowed"}`,
                                                                        onClick: item.available ? ()=>setMobileMenuOpen(false) : (e)=>e.preventDefault(),
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            className: "flex items-center justify-between",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    children: item.title
                                                                                }),
                                                                                !item.available && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    className: "text-xs bg-gray-700 text-gray-400 px-2 py-1",
                                                                                    children: "Soon"
                                                                                })
                                                                            ]
                                                                        })
                                                                    }, itemIndex))
                                                            })
                                                        ]
                                                    }, categoryIndex))
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: "/about",
                                        className: "block px-4 py-3 text-white font-medium hover:text-[#1C0AA3] hover:bg-gray-800/50  transition-all duration-200",
                                        onClick: ()=>setMobileMenuOpen(false),
                                        children: "About"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: "/contact",
                                        className: "block px-4 py-3 text-white font-medium hover:text-[#1C0AA3] hover:bg-gray-800/50  transition-all duration-200",
                                        onClick: ()=>setMobileMenuOpen(false),
                                        children: "Contact"
                                    })
                                ]
                            })
                        })
                    })
                ]
            }),
            servicesDropdownOpen && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "fixed inset-0 bg-black/20 backdrop-blur-sm z-30 hidden lg:block"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "dropdown-content fixed top-16 lg:top-18 left-0 right-0 z-40 hidden lg:block",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "max-w-6xl mx-auto",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "bg-black border border-gray-800 shadow-2xl",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex justify-center",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "w-full flex",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "w-64 border-r border-gray-800",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "space-y-1",
                                                    children: servicesDropdownItems.map((category, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: `group cursor-pointer p-5 transition-all duration-200 ${selectedCategory === index ? "border border-[#1C0AA3]" : "hover:bg-gray-900 border border-transparent"} ${!category.available ? "opacity-60" : ""}`,
                                                            onClick: ()=>setSelectedCategory(index),
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "flex items-center justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                            className: `font-medium text-xs ${selectedCategory === index ? "text-white" : "text-white"} transition-colors duration-200`,
                                                                            children: category.category
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "flex flex-col items-end space-y-1",
                                                                        children: [
                                                                            !category.available && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: "text-xs bg-gray-800 text-gray-400 px-1.5 py-0.5",
                                                                                children: "Soon"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_ChevronRight_from_default_as_default_join_esm_icons_chevron_right_lucide_react__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                                                className: `w-3 h-3 transition-all duration-200 ${selectedCategory === index ? "text-white" : "text-gray-500"}`
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        }, index))
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex-1 p-4",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "mb-4",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "flex items-center justify-between mb-2",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                        className: "text-sm font-semibold text-white",
                                                                        children: servicesDropdownItems[selectedCategory]?.category
                                                                    }),
                                                                    !servicesDropdownItems[selectedCategory]?.available && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "text-xs bg-gray-800 text-gray-400 px-2 py-0.5",
                                                                        children: "Coming Soon"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "h-px bg-gray-800  "
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "grid grid-cols-2 gap-3",
                                                        children: servicesDropdownItems[selectedCategory]?.items.map((item, itemIndex)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: item.available ? item.href : "#",
                                                                className: `group p-3 transition-all duration-200 ${item.available ? "hover:border-[#1C0AA3]" : "border-gray-800/50 cursor-not-allowed"}`,
                                                                onClick: !item.available ? (e)=>e.preventDefault() : ()=>setServicesDropdownOpen(false),
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "flex items-start justify-between",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            className: "flex-1 flex items-center gap-2 hover:text-[#1C0AA3]",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                                    className: `font-medium text-xs mb-1 ${item.available ? "text-white group-hover:text-[#1C0AA3]" : "text-gray-500"} transition-colors duration-200`,
                                                                                    children: item.title
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_ChevronRight_from_default_as_default_join_esm_icons_chevron_right_lucide_react__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                                                    className: `w-4 h-4`
                                                                                })
                                                                            ]
                                                                        }),
                                                                        !item.available && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "text-xs bg-gray-800 text-gray-400 px-1.5 py-0.5 flex-shrink-0 ml-2",
                                                                            children: "Soon"
                                                                        })
                                                                    ]
                                                                })
                                                            }, itemIndex))
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "h-16 lg:h-18"
            })
        ]
    });
}


/***/ })

};
;