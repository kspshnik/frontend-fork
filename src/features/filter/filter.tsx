import { useState } from 'react';

import { FilterWrapper } from 'features/filter/components/filter-wrapper';
import { IFilterValues } from 'features/filter/types';
import { SortByBlock } from 'features/filter/ui/sortBy-block';
import { CategoriesBlock } from 'features/filter/ui/categories-block';
import { RadiusBlock } from 'features/filter/ui/radius-block';
import { CalenderBlock } from 'features/filter/ui/calender-block';
import { UserCategoriesBlock } from 'features/filter/ui/userCategories-block';

export interface FilteringProps {
  items: {
    categories?: boolean;
    radius?: boolean;
    sort?: boolean;
    date?: boolean;
    userCategories?: boolean;
  };

  notFoundFilter?: never;
}

export interface NotFoundFilterProps {
  items?: never;

  notFoundFilter: boolean;
}

export type FilterProps = FilteringProps | NotFoundFilterProps;

export const Filter = ({ items, notFoundFilter = false }: FilterProps) => {
  const [filterValues, setFilterValues] = useState<IFilterValues>({
    sortBy: '',
    categories: [],
    searchRadius: '',
    date: '',
  });

  const handleFilterChange = (
    name: string,
    value: string | string[] | boolean
  ) => {
    setFilterValues({ ...filterValues, [name]: value });
  };

  if (notFoundFilter) {
    return (
      <FilterWrapper
        filterMenu={
          <span>Для такого вида профиля волонтёра нет подходящего фильтра</span>
        }
        filterValues={filterValues}
        setFilterValues={setFilterValues}
      />
    );
  }

  return (
    <FilterWrapper
      filterMenu={
        <>
          {items?.sort && (
            <SortByBlock
              filter={filterValues.sortBy}
              onChange={handleFilterChange}
            />
          )}

          {items?.categories && (
            <CategoriesBlock
              selectedCategories={filterValues.categories}
              onChange={handleFilterChange}
            />
          )}

          {items?.userCategories && (
            <UserCategoriesBlock
              filter={filterValues.categories}
              onChange={handleFilterChange}
            />
          )}

          {items?.radius && (
            <RadiusBlock
              filter={filterValues.searchRadius}
              onChange={handleFilterChange}
            />
          )}

          {items?.date && (
            <CalenderBlock
              filterDate={filterValues.date}
              onChange={handleFilterChange}
            />
          )}
        </>
      }
      filterValues={filterValues}
      setFilterValues={setFilterValues}
    />
  );
};