import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: payments = [] } = useQuery({
    queryKey: ["payment", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payment/${user?.email}`);
      return res.data;
    },
  });
  return (
    <div className="m-8">
      <h2 className="text-3xl">Total Payments : {payments.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Price</th>
              <th>transactionId</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {
                payments.map((payment, idx) => (
                  <tr key={payment._id}>
                    <th>{idx + 1}</th>
                    <td>${payment.price}</td>
                    <td>{payment.transactionId}</td>
                    <td>{payment.status}</td>
                  </tr>
                )) || <tr><td colSpan="4" className="text-center">No Payments Found</td></tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
