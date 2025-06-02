import useCookie from "react-use-cookie";
import useSWR from "swr";
import { useParams } from "react-router-dom";
import html2pdf from "html2pdf.js";
import printJS from "print-js";

const useVoucherDetail = () => {
  const [token] = useCookie("token");

  const fetcher = (url) =>
    fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
    }).then((res) => res.json());

  const { id } = useParams();

  const { data, error, isLoading } = useSWR(
    import.meta.env.VITE_API_URL + "/vouchers/" + id,
    fetcher
  );

  const handlePrint = () => {
    printJS({
      printable: "printArea",
      type: "html",
      css: "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css", // Load Tailwind
      scanStyles: false,
    });
  };

  const handlePdf = () => {
    const content = document.querySelector("#printArea");

    html2pdf()
      .set({
        margin: 0.5,
        filename: "voucher.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { orientation: "portrait", unit: "mm", format: "a5" },
      })
      .from(content)
      .save();
  };


  return { data, error, isLoading, handlePrint, handlePdf };
};

export default useVoucherDetail;
