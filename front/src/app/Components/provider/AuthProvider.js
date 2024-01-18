"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { FaHouse } from "react-icons/fa6";
import { api } from "@/app/common/axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { Loading } from "../Loading";

const TextContext = createContext();

export function AuthProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [addRecord, setAddRecord] = useState(false);
  const [expense, setExpense] = useState(true);
  const [addCat, setAddCat] = useState(false);
  const [isDbActive, setIsDbActive] = useState("");
  const [step, setStep] = useState(100);
  const [showIcons, setShowIcons] = useState(false);
  const [icon, setIcon] = useState(<FaHouse />);
  const [iconColor, setIconColor] = useState("#000000");
  const [dropCategory, setDropCategory] = useState(false);
  const [profileLog, setProfileLog] = useState(false);
  const [refresh, setRefresh] = useState(0);
  const [addNewCategory, setAddNewCategory] = useState(
    "Find or choose category"
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [repass, setRepass] = useState("");
  const [categories, setCategories] = useState([]);
  const [records, setRecords] = useState([]);
  const [filteredRecords, setFilteredRecords] = useState("");
  const [categoryColor, setCategoryColor] = useState("#000000");
  const [iconName, setIconName] = useState([]);
  const [radioChecked, setRadioChecked] = useState("");
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [rangeMin, setRangeMin] = useState(0);
  const [rangeMax, setRangeMax] = useState(1000000);
  const [rangeValue, setRangeValue] = useState(10000000);
  const [days, setDays] = useState(90);
  const [old, setOld] = useState(false);
  const [sum, setSum] = useState(0);
  const [isClear, setIsClear] = useState(false);
  const [checked, setChecked] = useState(false);
  const [currency, setCurrency] = useState("₮");
  const [checkList, setCheckList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [dashboardRecords, setDashboardRecords] = useState([]);

  const router = useRouter();

  const numberFormatter = new Intl.NumberFormat("en-US", {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  // Add days function
  const plusDays = () => {
    if (days == 7) {
      setDays(14);
    }
    if (days == 14) {
      setDays(30);
    }
    if (days == 30) {
      setDays(60);
    }
    if (days == 60) {
      setDays(90);
    }
    if (days == 90) {
      setDays(7);
    }
    setRefresh(refresh + 1);
  };

  // Minus days function
  const minusDays = () => {
    if (days == 90) {
      setDays(60);
    }
    if (days == 60) {
      setDays(30);
    }
    if (days == 30) {
      setDays(14);
    }
    if (days == 14) {
      setDays(7);
    }
    if (days == 7) {
      setDays(90);
    }
    setRefresh(refresh + 1);
  };

  const handleProfileLog = () => {
    setProfileLog((prev) => !prev);
  };

  // Add record window dropdown category list show toggle function
  const dropDownCategory = () => {
    setDropCategory((prev) => !prev);
  };

  // Add category-category list dropdown toggle function
  const iconChoose = () => {
    setShowIcons((prev) => !prev);
  };

  // Sign-Up step change function
  const changeStep = () => {
    if (step == 100) {
      setStep(200);
    } else if (step == 200) {
      setStep(300);
    } else setStep(100);
  };

  // Expense and Income toggle function
  const changeExpense = () => {
    setExpense((prev) => !prev);
  };

  // Sign-In
  const signIn = async (email, password) => {
    setIsLoading(true);
    try {
      const { data } = await api.post("/sign-in", { email, password });
      const { token, currency } = data;
      console.log(token);
      setCurrency(currency);
      localStorage.setItem("token", token);
      localStorage.setItem("currency", currency);

      toast.success(data.message, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setIsLoggedIn(true);
      router.push("/Dashboard");
    } catch (err) {
      console.log(err), "FFF";
      toast.error(err.response.data.message, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Sing-Up
  const signUp = async (name, email, password, currency) => {
    try {
      const { data } = await api.post("/sign-up", {
        name,
        email,
        password,
        currency,
      });
      toast.info(data.message, {
        position: "top-center",
        autoClose: true,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      router.push("/Signup/Settings");
    } catch (err) {
      console.log(err), "FFF";
    }
  };

  //Add record
  const addNewRecord = async (
    type,
    category,
    amount,
    date,
    payee,
    note,
    categoryColor,
    iconName
  ) => {
    try {
      const token = localStorage.getItem("token");
      const { data } = await api.post(
        "/records",
        { type, category, amount, date, payee, note, categoryColor, iconName },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setRefresh(refresh + 1);
      toast.info(data.message, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (err) {
      console.log(err), "FFF";
    }
  };

  //Add new category
  const newCategory = async (icon, color, category) => {
    try {
      const token = localStorage.getItem("token");
      const { data } = await api.post(
        "/category",
        { icon, color, category },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setRefresh(refresh + 1);
      toast.info(data.message, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (err) {
      console.log(err), "FFF";
    }
  };

  // get Catgetories
  const getCategories = async () => {
    try {
      const token = localStorage.getItem("token");
      const { data } = await api.get("/category", {
        headers: {
          Authorization: token,
        },
      });
      setCategories(data);
    } catch (err) {
      console.log(err), "FFF";
    }
  };

  // get Records
  const getRecords = async () => {
    try {
      const token = localStorage.getItem("token");
      const { data } = await api.get(`/records`, {
        headers: {
          Authorization: token,
        },
        params: {
          days: days,
          old: old,
        },
      });
      setRecords(data.sortedRecords);
      setDashboardRecords(data.records);
    } catch (err) {
      console.log(err), "FFF";
    }
  };

  // Sign-Out
  const signOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("currency");
    setIsLoggedIn(false);
    router.push("/");
  };

  const recordMax = () => {
    let max = 0;
    for (let i = 0; i < records.length; i++) {
      if (records[i].amount > max) {
        max = records[i].amount;
      }
    }
    return max;
  };

  useEffect(() => {
    setIsReady(false);
    getRecords();
    getCategories();
    const token = localStorage.getItem("token");
    setCurrency(localStorage.getItem("currency"));
    if (token) {
      setIsLoggedIn(true);
    }
    setIsReady(true);
  }, []);

  useEffect(() => {
    getCategories();
    getRecords();
  }, [refresh,currency]);

  return (
    <div lang="en">
      <div className=" ">
        <TextContext.Provider
          value={{
            numberFormatter,
            isLoading,
            setIsLoading,
            isReady,
            setIsReady,
            changeStep,
            step,
            setStep,
            signIn,
            signUp,
            signOut,
            addNewRecord,
            newCategory,
            getCategories,
            categories,
            setCategories,
            records,
            setRecords,
            getRecords,
            addRecord,
            setAddRecord,
            expense,
            setExpense,
            changeExpense,
            addCat,
            setAddCat,
            isDbActive,
            setIsDbActive,
            icon,
            setIcon,
            showIcons,
            setShowIcons,
            iconChoose,
            iconColor,
            setIconColor,
            dropCategory,
            setDropCategory,
            dropDownCategory,
            days,
            setDays,
            minusDays,
            plusDays,
            isLoggedIn,
            setIsLoggedIn,
            profileLog,
            setProfileLog,
            handleProfileLog,
            addNewCategory,
            setAddNewCategory,
            refresh,
            setRefresh,
            categoryColor,
            setCategoryColor,
            iconName,
            setIconName,
            radioChecked,
            setRadioChecked,
            filteredRecords,
            setFilteredRecords,
            categoryFilter,
            setCategoryFilter,
            rangeMax,
            rangeMin,
            rangeValue,
            setRangeMax,
            setRangeMin,
            setRangeValue,
            old,
            setOld,
            isClear,
            setIsClear,
            checked,
            setChecked,
            currency,
            setCurrency,
            checkList,
            setCheckList,
            searchValue,
            setSearchValue,
            dashboardRecords,
            setDashboardRecords,
            name,
            email,
            pass,
            repass,
            setName,
            setEmail,
            setPass,
            setRepass,
          }}
        >
          {isReady ? children : <Loading />}
        </TextContext.Provider>
      </div>
    </div>
  );
}
export const useText = () => useContext(TextContext);
