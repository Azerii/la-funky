import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { base_url, numSequence } from '../../utils/utils';
import DataTable from './DataTable';
import { useTable, usePagination } from 'react-table';
import FeatherIcon from '../../general/components/global/FeatherIcon';
import Pagination from './Pagination';
import { useAppSelector } from '../../redux/hooks';

// interface FetchArgs {
//   pageSize: number;
//   pageIndex: number;
// }

const COLUMNS: any = [
  {
    Header: 'Code',
    accessor: 'orderCode'
  },
  {
    Header: 'Amount',
    accessor: 'totalAmount'
  },
  {
    Header: 'Delivery status',
    accessor: 'deliveryStatus'
  },
  {
    Header: 'Status',
    accessor: 'status'
  }
];

const mockData = [
  {
    status: 'NEW',
    deliveryStatus: 'PENDING',
    orderCode: 'ORD_u5nu087o0glm8gu',
    transactionId: 2,
    totalAmount: 0
  }
];

function Orders(): JSX.Element {
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState<any>([]);
  const [count, setCount] = useState(0);
  const [controlledPageCount, setPageCount] = useState(0);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    // pageOptions,
    gotoPage,
    pageCount,
    setPageSize
  }: any = useTable(
    {
      data: orders.concat(mockData),
      columns: COLUMNS,
      manualPagination: true,
      pageCount: controlledPageCount
    },
    usePagination
  );

  const { pageIndex, pageSize } = state;

  const token = useAppSelector((state) => state.auth.token);

  const getOrders = useCallback(async (): Promise<void> => {
    try {
      setLoading(true);
      const res = await axios.get(
        `${base_url}/orders?limit=${pageSize}&offset=${pageIndex}`,
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      if (res?.data?.status === 'success') {
        setOrders(res.data.data.orders);
        setCount(res.data.data.count);
        setPageCount(Math.ceil(res.data.data.count / pageSize));
      }

      setLoading(false);
    } catch (e: any) {
      setLoading(false);
      console.log(e);
    }
  }, []);

  useEffect(() => {
    getOrders();
  }, [getOrders, pageIndex, pageSize]);

  return (
    <div
      className="tab-pane fade active show"
      id="orders"
      role="tabpanel"
      aria-labelledby="orders-tab"
    >
      <div className="card">
        <div className="card-header">
          <h3>Orders</h3>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <DataTable>
              <thead>
                <tr>
                  <th>Code</th>
                  <th>Amount</th>
                  <th>Delivery Status</th>
                  <th>Order Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#1234</td>
                  <td>March 15, 2020</td>
                  <td>Processing</td>
                  <td>$78.00 for 1 item</td>
                </tr>
                <tr>
                  <td>#2366</td>
                  <td>June 20, 2020</td>
                  <td>Completed</td>
                  <td>$81.00 for 1 item</td>
                </tr>
                {orders.concat(mockData)?.map((item: any, index: number) => (
                  <tr key={index}>
                    <td>{item?.orderCode}</td>
                    <td>{item?.totalAmount}</td>
                    <td>{item?.deliveryStatus}</td>
                    <td>{item?.status}</td>
                  </tr>
                ))}
              </tbody>
            </DataTable>
            {!!page.length && (
              <Pagination className="my-4">
                <div className="colItem">
                  <div className="colItem pageSize item">
                    <span className="sup">Items per page: </span>
                    <div className="colItem selectGroup">
                      <select
                        id="pageSize"
                        name="pageSize"
                        onChange={(e) => setPageSize(Number(e.target.value))}
                        defaultValue={pageSize}
                      >
                        <option value="" hidden>
                          {pageSize}
                        </option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="40">40</option>
                        <option value="50">50</option>
                      </select>
                      <i
                        data-feather="chevron-down"
                        className="dropdownIcon"
                      ></i>
                    </div>
                  </div>
                  <div className="divider"></div>
                  <div className="colItem item">
                    <span className="sup">
                      page <b>{pageIndex + 1}</b> of <b>{count}</b> entries
                    </span>
                  </div>
                  <div className="divider"></div>
                </div>
                <div className="colItem">
                  <div className="divider"></div>
                  <div className="colItem item">
                    <div className="colItem selectGroup">
                      <select
                        id="pageSize"
                        name="pageSize"
                        onChange={(e) => {
                          const pageNumber = e.target.value
                            ? Number(e.target.value) - 1
                            : 0;
                          gotoPage(pageNumber);
                        }}
                        value={pageIndex + 1}
                      >
                        <option value="" hidden>
                          {pageIndex + 2}
                        </option>
                        {numSequence(pageCount).map((item) => (
                          <option key={`page_${item}`} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                      <i
                        data-feather="chevron-down"
                        className="dropdownIcon"
                      ></i>
                    </div>
                    <div className="colItem">
                      <span className="sup">
                        &nbsp; of {pageCount} page{pageCount !== 1 ? 's' : ''}
                      </span>
                    </div>
                  </div>
                  <div className="divider"></div>
                  <button
                    className="colItem item"
                    disabled={!canPreviousPage}
                    onClick={() => previousPage()}
                  >
                    <FeatherIcon iconName="chevron-left" color="#ffffff" />
                  </button>
                  <div className="divider"></div>
                  <button
                    className="colItem item"
                    disabled={!canNextPage}
                    onClick={() => nextPage()}
                  >
                    <FeatherIcon iconName="chevron-right" color="#ffffff" />
                  </button>
                </div>
              </Pagination>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
