import * as React from 'react';
import { FunctionComponent } from 'react';

import { Box, Button, IconButton, Typography, useTheme } from '@mui/material';
import { useLocation } from '@remix-run/react';
import { useTranslation } from 'react-i18next';
import { matchPath } from 'react-router';

import { SidebarProps } from '~/src/components/Layout/components/Sidebar/types';
import {
  PAYMENTS_ACCOUNTS_ROUTE,
  PAYMENTS_ROUTE,
  routerConfig,
} from '~/src/components/Layout/routes';
import LinkWrapper from '~/src/components/Wrappers/LinkWrapper';

const Sidebar: FunctionComponent<SidebarProps> = ({ width, resized }) => {
  const { palette } = useTheme();
  const location = useLocation();
  const { t } = useTranslation();

  const buttonSx = {
    width: resized ? 'auto' : 200,
    m: '2px',
    p: '8px',
    color: palette.neutral[600],
    display: 'flex',
    borderRadius: '6px',
    textTransform: 'none',
    justifyContent: resized ? 'center' : 'start',
    ':hover': {
      p: '8px',
      color: palette.neutral[700],
    },
  };

  return (
    <Box
      id="sidebar"
      sx={{
        width,
        borderRight: `1px solid ${palette.neutral[200]} !important`,
        background: palette.neutral[100],
        transition: 'all 0.25s',
      }}
    >
      <Box
        mt={resized ? 6 : 9}
        sx={{
          ml: resized ? 2 : 0,
          position: 'fixed',
          height: '100%',
        }}
      >
        {routerConfig.map(({ label: groupLabel, children }, index) => (
          <Box key={index} sx={{ marginTop: resized ? '24px' : '0px' }}>
            {groupLabel && !resized && (
              <Box mt={index === 1 ? 1 : 2} p={1} ml={3}>
                <Typography
                  variant="caption"
                  sx={{
                    textTransform: 'uppercase',
                    color: palette.neutral[500],
                  }}
                >
                  {t(groupLabel)}
                </Typography>
              </Box>
            )}

            {children.map(({ label, paths, id, icon, strict }) => {
              let selected = false;
              for (let i = 0; i < paths.length; i++) {
                if (paths[i] === location.pathname) {
                  selected = true;
                  break;
                } else {
                  // TODO find a better way to avoid router to be confused between /payments/accounts and /payments/somePaymentId
                  // Ugly exception
                  if (
                    location.pathname === PAYMENTS_ACCOUNTS_ROUTE &&
                    paths[i] === PAYMENTS_ROUTE
                  ) {
                    selected = false;
                    break;
                    // end exception
                  } else {
                    const match = matchPath(paths[i], location.pathname);

                    if (match && !strict) {
                      selected = true;
                      break;
                    }
                  }
                }
              }

              const sx = {
                ...buttonSx,
                background: selected ? palette.neutral[50] : 'inherit',
              };

              return (
                <Box
                  key={id}
                  sx={{
                    display: 'flex',
                    justifyContent: resized ? 'center' : 'space-between',
                    marginLeft: resized ? '0px' : '24px',
                    alignItems: 'center',
                    transition: 'all 0.25s',
                  }}
                >
                  <LinkWrapper
                    to={paths[0]}
                    prefetch="intent"
                    key={id}
                    color="inherit"
                  >
                    {!resized ? (
                      <Button sx={sx} startIcon={icon}>
                        {t(label)}
                      </Button>
                    ) : (
                      <IconButton sx={sx}>{icon}</IconButton>
                    )}
                  </LinkWrapper>
                </Box>
              );
            })}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Sidebar;
